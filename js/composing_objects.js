// Two primitive data types
const firstName = 'Clause';
const lastName = 'Debussy';

// A composite object 
const fullName = {
  firstName,lastName
};

console.log(fullName);

//Building composites with class inheritance

class Foo {
  constructor(){
    this.a = 'a'
  }
}

class Bar extends Foo {
  constructor() {
    super();
    this.b = 'b';
  }
}

const myBar = new Bar();

console.log(myBar);

//Building composites with mixin composition

const a = {
   a: 'a'
};

const b = {
  b: 'b',
  f: 'f'
};

const c = {...a,...b};

console.log(c);