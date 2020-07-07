//lambda calculus function (unary)

const add = x => y => x + y;

console.log(add(3)(8));

//classic function composition

const compose = (f,g) => x => f(g(x));

const double = n => n * 2;
const inc = n => n + 1;

const transform = compose(double,inc);

console.log(transform(3));
console.log(compose(double,inc)(3));