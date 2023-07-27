import { HTTP_STATUS_OK } from '../constants';

export default async function auth(req, res) {
  const { profile } = req;
  res.status(HTTP_STATUS_OK).send({
    ok: true,
    profile: {
      picture: profile.picture,
      givenName: profile.givenName,
      familyName: profile.familyName,
    },
  });
}
