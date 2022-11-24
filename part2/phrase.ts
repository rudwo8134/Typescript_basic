// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
interface Named {
  readonly name: string;
}
interface Password {
  readonly password: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string): void {
    console.log(phrase);
  }
}

let user1: Greetable;

user1 = new Person('Eric Shin');

user1.greet('test1');

console.log(user1);
