// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
// );

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n'),


// //Arrow functions
const printName = () => 'Lucas'; //é possível omitir () se a função receber só 1 parâmetro
console.log(printName());

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));


//ternary operator
// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`; // (x ? y : z)

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira


// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
    if (age >= 18) {
      return `Você tem idade para dirigir!`;
    } else {
      return `Você ainda não tem idade para dirigir...`;
    }
  };
  // console.log(checkIfElse(age));
  
  const checkTernary = (age) => (
    age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
  );
  // console.log(checkTernary(age));