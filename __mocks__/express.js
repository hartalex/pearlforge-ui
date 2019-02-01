const obj = () => {
  return {
    use: jest.fn(),
    listen: (port, cb) => {
      cb()
    }
  }
}

obj.static = jest.fn()

export default obj
