import {MESSAGE_HEALTH} = '../constants';

export default async function health (req, res) {
  res.send({ ok: true, message: MESSAGE_HEALTH })
}
