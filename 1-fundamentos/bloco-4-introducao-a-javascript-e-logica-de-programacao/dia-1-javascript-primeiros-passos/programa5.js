// 5- Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. Um ângulo será considerado inválido se não tiver um valor positivo.

const a = 50;
const b = 60;
const c = 40;
const soma = a + b + c;

if(soma === 180){
    console.log("true");
} else if(a < 0 || b < 0 || c < 0){
    console.log("Erro, ângulo inválido");
} else{
    console.log("false");
}
