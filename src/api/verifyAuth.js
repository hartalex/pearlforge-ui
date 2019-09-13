import {OAuth2Client} from 'google-auth-library';

const {
  env: {USER_ID, CLIENT_ID},
} = process;

export const verifyAuthMiddleWare = async function(req, res, next) {
  try {
    if (!req.get('Authorization')) {
      throw new Error('Missing Authorization Header');
    }
    const authValue = req.get('Authorization').split(' ');
    const authType = authValue[0];
    const authToken = authValue[1];

    var {sub, picture, given_name, family_name, email, locale} = await verify(
      authToken,
    );

    if (sub === USER_ID) {
      req.user_id = sub;
      req.profile = {
        picture,
        given_name,
        family_name,
        email,
        locale,
      };
      next();
    } else {
      throw new Error('User is not valid');
    }
  } catch (err) {
    console.error(`Auth Error ${err}`);
    res.status(401).send({message: 'unauthorized'});
  }
};

async function verify(token) {
  const client = new OAuth2Client(CLIENT_ID);
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  return ticket.getPayload();
}
