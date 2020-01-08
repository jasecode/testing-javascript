/* This is erroring out on purpose */
const sum = (a,  b) => a - b

const subtract = (a, b) => a - b

/* Used to Simulate async functions */
const sumAsync = (...args) => Promise.resolve(sum(...args))
const subtractAsync = (...args) => Promise.resolve(subtract(...args))

module.exports = {sum, subtract}
