const {sum, subtract} = require('./math')

let result, expected

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

result = subtract(0, 5)
expected = 0
expect(result).toBeGreaterThan(expected)

function expect(actual){
    return {
        toBe(expected) {
            if(actual !== expected) {
                throw new Error(`${result} is not equal to ${expected}`)
            }
        },
        toBeGreaterThan(expected) {
            if(actual >= expected) {
                throw new Error(`${result} is greater than ${expected}`)
            }
        }
    }
}