// exemplo do conteúdo "expect e matchers"

const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};
multiplyByTwo(4);

module.exports = multiplyByTwo;