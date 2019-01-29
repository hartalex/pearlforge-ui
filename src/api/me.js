export default async function me (req, res) {
  if (req.profile) {
    const profile = req.profile
    res.send({
      ok: true,
      profile: { picture: profile.picture, given_name: profile.given_name, family_name: profile.family_name }
    })
  } else {
    res.status(401).send({ ok: true, message: 'unauthorized' })
  }
}
