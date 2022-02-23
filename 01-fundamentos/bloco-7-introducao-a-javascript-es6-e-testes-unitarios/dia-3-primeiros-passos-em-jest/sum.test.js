// exemplo do conteúdo "escrevendo testes"

// sum.test.js
const { sum, sum2 } = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});


describe ('exercicios ref sum2', () => {
  it('retornar o resultado da soma', () => {
    expect(sum2(4, 5)).toBe(9);
    expect(sum2(0, 0)).toBe(0);
  });

  it('Teste se a função sum2 lança um erro qdo os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => { sum2(4, '5') }).toThrow();
  });

  it('a mensagem de erro é "parameters must be numbers" qdo chamar sum2(4, "5")', () => {
    expect(() => { sum2(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });
});