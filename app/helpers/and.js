
module.exports = (...values) => {
  // eslint-disable-next-line no-unused-vars
  const _options = values.pop()
  return values.every((value) => value)
}
