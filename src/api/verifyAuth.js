import {OAuth2Client} from 'google-auth-library';
import {HEADER_AUTHORIZATION, MISSING_AUTHORIZATION_HEADER, CHAR_SPACE, HTTP_STATUS_401, MESSAGE_AUTH_ERROR} = '../constants';

const {
  env: {USER_ID, CLIENT_ID},
} = process;

export const verifyAuthMiddleWare = async function(req, res, next) {
  try {
    if (!req.get(HEADER_AUTHORIZATION)) {
      throw new Error(MISSING_AUTHORIZATION_HEADER);
    }
    const authValue = req.get(HEADER_AUTHORIZATION).split(CHAR_SPACE);
    const authType = authValue[AUTH_TYPE_INDEX];
    const authToken = authValue[AUTH_TOKEN_INDEX];

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
      throw new Error(MESSAGE_USER_IS_NOT_VALID);
    }
  } catch (err) {
    console.error(`${MESSAGE_AUTH_ERROR} ${err}`);
    res.status(HTTP_STATUS_401).send({message: MESSAGE_UNAUTHORIZED});
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
