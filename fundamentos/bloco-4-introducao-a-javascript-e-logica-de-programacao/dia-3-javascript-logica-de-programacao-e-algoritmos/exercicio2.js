//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'banana';

let inverter = word.split('').reverse().join('');
console.log(inverter);

//https://www.w3schools.com/jsref/jsref_split.asp  - split('') vai separar os caracteres e retornar um array
//https://www.w3schools.com/jsref/jsref_reverse.asp - reverse() inverte a ordem dos elementos do array
//https://www.w3schools.com/jsref/jsref_join.asp - join() retorna uma matriz em string

//outra forma de fazer usando função e for - https://www.horadecodar.com.br/2020/05/06/como-inverter-uma-string-em-javascript/


function inverterString(str) {
    var o = '';
    for (var i = str.length - 1; i >= 0; i--) {
        o += str[i];
    }
    return o;
}
 //o for inicial começa pelo último índice do array, a condição de parada é índice 0, e ele decrementa do final para o começo.
console.log(inverterString("banana"));
