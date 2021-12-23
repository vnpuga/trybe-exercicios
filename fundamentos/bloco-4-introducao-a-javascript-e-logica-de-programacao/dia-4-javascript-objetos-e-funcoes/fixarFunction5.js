// 5- Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. Um ângulo será considerado inválido se não tiver um valor positivo.

function angulo(num1, num2, num3) {
  if((num1 + num2 + num3) === 180){
    return "true";
  } else if(num1 < 0 || num2 < 0 || num3 < 0){
    return "Erro, ângulo inválido";
  } else{
    return "false";
  }
}
console.log(angulo(-10,30,50));