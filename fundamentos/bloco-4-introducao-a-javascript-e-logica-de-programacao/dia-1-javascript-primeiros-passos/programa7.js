//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
let nota = 89.9;

if (nota < 0 || nota > 100) {
  console.log("nota inválida");  
} else if (nota >= 90){
  console.log("nota A");
} else if (nota >= 80 && nota < 90){
  console.log("nota B");
}  else if (nota >= 70 && nota < 80){
  console.log("nota C");
}  else if (nota >= 60 && nota < 70){
  console.log("nota D");
} else if (nota >= 50 && nota < 60){
  console.log("nota E");
} else {
  console.log("nota F");
}