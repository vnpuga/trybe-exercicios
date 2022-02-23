let aliquotaInss = 0;
let alquotaIr = 0;
let salarioBruto = 3000.00;

if (salarioBruto <= 1556.94) {
  aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaInss = salarioBruto * 0.11;
} else {
  aliquotaInss = 570.88
}
console.log(aliquotaInss);

let salarioBaseIr = salarioBruto - aliquotaInss;

if (salarioBaseIr <= 1903.98) {
  alquotaIr = 0;
} else if (salarioBaseIr <= 2826.65) {
  alquotaIr = (salarioBaseIr * 0.075) - 142.80;
} else if (salarioBaseIr <= 3751.05) {
  alquotaIr = (salarioBaseIr * 0.15) - 354.80;
} else if (salarioBaseIr <= 4664.68) {
  alquotaIr = (salarioBaseIr * 0.225) - 636.13;
} else {
  alquotaIr = (salarioBaseIr * 0.275) - 869.36;
}
console.log("Salário líquido = " + (salarioBaseIr - alquotaIr));