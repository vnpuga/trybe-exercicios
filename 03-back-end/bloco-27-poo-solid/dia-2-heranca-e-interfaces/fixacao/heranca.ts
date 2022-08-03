class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor(){
    super();
    this.isSuper = false;
  }
 }

const myFunc = (obj: Superclass) => {
  // console.log(obj.sayHello());
  obj.sayHello();
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
}

const superclass = new Superclass();
const subclass = new Subclass();

myFunc(superclass);
myFunc(subclass);