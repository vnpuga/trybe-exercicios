// Crie um type para um objeto que represente um pássaro.
type Bird = {
  specieName: string,
  nationality: string,
  inExtinction: boolean,
}

// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
type Sum = (x: number, y: number) => number;

// Crie um type para um objeto que represente um endereço.
type Address = {
  street: string,
  number: number,
  district: string,
  complement: string,
  city: string,
  state: string,
}

// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type StatesfMatter = 'liquid' | 'solid' | 'gaseous';

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
type CpfDocument = number | string;

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type OperationalSystem = 'linux' | 'mac' | 'windows'; 

// Crie um type union que represente as vogais do alfabeto.
type Vowels = 'a' | 'e' | 'i' | 'o' | 'u';