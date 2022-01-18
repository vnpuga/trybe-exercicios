const myRemove = require('./exercicio2');

// implemente seus testes aqui
describe ('Verificação da função myRemove', () => {
  it('retornar um array removendo o item correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// .toEqual usado para testar igualdade de objetos e arrays