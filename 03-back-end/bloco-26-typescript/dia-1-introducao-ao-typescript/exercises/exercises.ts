// ./exercises.ts

// A primeira função recebe um nome e o imprime na tela com o texto "Olá Nome".
export function greeter(name: string) {
  return `Olá ${name}!`;
}

// A segunda função irá mostrar na tela o nome da pessoa e sua idade.
export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

// A terceira função fará a adição de todos os números que estão dentro de um array. 
// Para isso, faremos uma função add que será chamada dentro da função sumArray, que por sua vez utilizará o método reduce para realizar a soma dos valores.
export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

// A quarta função será para calcular a área de um triângulo
export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

// A quinta função será para calcular a área de um quadrado. 
export function square(side: number): number {
  return side ** 2;
}

// A última função será para calcular a área de um retângulo.
export function rectangle(base: number, height: number): number {
  return base * height;
}

// Crie uma nova função para calcular a área de um losango
export function lozenge(D: number, d: number): number {
  return (D * d) / 2;
}

// Crie uma nova função para calcular a área de um trapézio.
export function trapeze(B: number, b: number, h: number): number {
  return ((B + b) * h) / 2
}

// Crie uma nova função para calcular a área de um círculo
export function circle(radius:number):number {
  const PI:number = 3.14;
  return PI * radius ** 2
}