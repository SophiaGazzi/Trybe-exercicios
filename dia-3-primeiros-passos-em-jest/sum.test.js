const sum = require('./sum');

describe('Função Retorna soma de dois parâmetros : ', () => {

    test('retorna a soma do parâmetro a com o b', () => {
        expect(sum(1, 2)).toBe(3);
    })

    test('retorna a soma do parâmetro a com o b', () => {
        expect(sum(4, 5)).toBe(9);
    })

    test('retorna a soma do parâmetro a com o b', () => {
        expect(sum(0, 0)).toBe(0);
    })

    test('retorna um Erro', () => {
        expect(() => { sum('') }).toThrow('parameters must be numbers');
    })
})

