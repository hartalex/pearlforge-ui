import { OAuth2Client } from 'google-auth-library';
import {
  AUTH_TOKEN_INDEX,
  CHAR_SPACE,
  HEADER_AUTHORIZATION,
  HTTP_STATUS_UNAUTHORIZED,
  MESSAGE_AUTH_ERROR,
  MESSAGE_MISSING_AUTHORIZATION_HEADER,
  MESSAGE_USER_IS_NOT_VALID,
  MESSAGE_UNAUTHORIZED,
} from '../constants';

const {
  env: { USER_ID, CLIENT_ID },
} = process;

async function verify(token) {
  const client = new OAuth2Client(CLIENT_ID);
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  return ticket.getPayload();
}

export default async (req, res, next) => {
  try {
    if (!req.get(HEADER_AUTHORIZATION)) {
      throw new Error(MESSAGE_MISSING_AUTHORIZATION_HEADER);
    }
    const authValue = req.get(HEADER_AUTHORIZATION).split(CHAR_SPACE);
    const authToken = authValue[AUTH_TOKEN_INDEX];

    const {
      sub,
      picture,
      given_name: givenName,
      family_name: familyName,
      email,
      locale,
    } = await verify(authToken);

    if (sub === USER_ID) {
      req.user_id = sub;
      req.profile = {
        picture,
        givenName,
        familyName,
        email,
        locale,
      };
      next();
    } else {
      throw new Error(MESSAGE_USER_IS_NOT_VALID);
    }
  } catch (err) {
    // TODO: Use logging library
    console.error(`${MESSAGE_AUTH_ERROR} ${err}`);
    res.status(HTTP_STATUS_UNAUTHORIZED).send({
      message: MESSAGE_UNAUTHORIZED,
    });
  }
};
