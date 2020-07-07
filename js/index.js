// Composing functions example 1
const g = n => n + 1;
const f = n => n * 2;

const doStuff = x => {
  const afterG = g(x);
  const afterF = f(afterG);
  return afterF;
}

//console.log(doStuff(20));

//Composing functions: Promise Chain
const i = n => n + 1;
const j = n => n * 2;

const wait = time => new Promise(
  (resolve, reject) => setTimeout(
    resolve,time
  )
);

wait(3000)
    .then(() => 20)
    .then(i)
    .then(j)
    .then(value => console.log(value))
;
