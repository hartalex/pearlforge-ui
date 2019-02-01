export default async function health (req, res) {
  res.send({ ok: true, message: 'health' })
}
