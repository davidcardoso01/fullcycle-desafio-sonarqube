const sum = require('../src/sum')

test('5 + 7 deve ser igual à 12', () => {
    expect(sum(5, 7)).toBe(12)
})