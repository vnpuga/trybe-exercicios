// 3- Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const num1 = 36;
const num2 = 64;
const num3 = 11;

if(num1 > num2 && num1 > num3){
    console.log("O " + num1 + " é o maior");
} else if(num2 > num1 && num2 > num3){
    console.log("O " + num2 + " é o maior");
} else{
    console.log("O " + num3 + " é o maior");
}