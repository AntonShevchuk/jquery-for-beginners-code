const log = console.log
const info = console.info
const error = console.error

console.log = function () {
  log(...arguments)
  output(...arguments)
}
console.info = function () {
  info(...arguments)
  output(...arguments)
}
console.error = function () {
  error(...arguments)
  output(...arguments)
}