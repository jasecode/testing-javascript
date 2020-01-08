const {sum, subtract} = require('./math')

function sumTest() {
    const result = sum(3, 7)
    const expected = 10
    expect(result).toBe(expected)
}
test('test sum numbers', sumTest)

function subtractTest() {
    const result = subtract(7, 3)
    const expected = 4
    expect(result).toBe(expected)
}
test('test subtract numbers', subtractTest)

function subtractZero() {
    result = subtract(0, 5)
    expected = 0
    expect(result).toBeGreaterThan(expected)
}
test('test if Negative numbers exist from subtraction', subtractZero)


/* Practice using arrow functions */
test('Test Sum Numbers Arrow', () => {
    const result = sum(3, 7)
    const expected = 10
    expect(result).toBe(expected)
})

/* Pracice understanding Async */ 
test('Testing Async Sum Numbers', async () => {
    const result = await sum(3, 7, 4)
    const expected = 14
    expect(result).toBe(expected)
})

async function test(title, callback) {
    try {
        await callback()
        console.log(`✓ ${title}`)
    } catch (error) {
        console.error(`✗ ${title}`)
        console.error(error)
    }
}

function expect(actual){
    return {
        toBe(expected) {
            if(actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toBeGreaterThan(expected) {
            if(actual >= expected) {
                throw new Error(`${actual} is greater than ${expected}`)
            }
        }
    }
}