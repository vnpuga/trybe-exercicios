abstract class Character{
  abstract talk(): void;
  abstract specialMove1(): void;
}

class MeleeCharacter extends Character{
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I attack at close range.`);
  }
  specialMove1():void {
    console.log(this._specialMoveName);   
  }
}

class LongRangeCharacter extends Character{
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(`Hi, I'm ${this._name}. I can attack from a long range. `);
  }

  specialMove1(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(this._specialMoveName);
  }
}

function characterShow(character: Character){
  character.talk();
  character.specialMove1();
}

const yoshi = new MeleeCharacter('yoshi', 'Super dragon');
const samus = new LongRangeCharacter('samus', 'Zero Laser');

characterShow(yoshi);
characterShow(samus);