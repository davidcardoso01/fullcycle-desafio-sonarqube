const subtraction = require('../src/subtraction')

test('9 - 3 deve ser igual à 6', () => {
    expect(subtraction(9, 3)).toBe(6)
})