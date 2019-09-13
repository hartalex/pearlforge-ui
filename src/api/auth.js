export default async function auth(req, res) {
  const {profile} = req;
  res.status(200).send({
    ok: true,
    profile: {
      picture: profile.picture,
      given_name: profile.given_name,
      family_name: profile.family_name,
    },
  });
}
