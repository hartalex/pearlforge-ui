const { OAuth2Client } = require('google-auth-library')
const CLIENT_ID = '466133376395-a2gr81ake50q1nhodotjbiprelvr51u6.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID)
async function verify (token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID
  })
  return ticket.getPayload()
}

export default async function getMe (req, res) {
  try {
    const authValue = req.get('Authorization').split(' ')
    const authType = authValue[0]
    const authToken = authValue[1]

    var decoded = await verify(authToken)
    console.log(decoded)
    // if (decoded.sub !== '112256442265203256517') {
    //   res.status(403).send({ ok: true, message: 'forbidden' })
    // }
    res.send({
      ok: true,
      profile: { picture: decoded.picture, given_name: decoded.given_name, family_name: decoded.family_name }
    })
  } catch (err) {
    console.error(err)
    res.status(401).send({ ok: true, message: 'unauthorized' })
  }
}
