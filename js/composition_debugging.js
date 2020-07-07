//Debug statements the long way
const g = n => n + 1;
const f = n => n * 2;

const doStuff = x => {
  const afterG = g(x);
  console.log(`after g: ${ afterG }`);
  const afterF = f(afterG);
  console.log(`after f: ${afterF}`)
  return afterF;
}
//doStuff(20);

//Debug statements the short way using trace Utiltiy
const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value
};

const doStuffTrace = x => {
  const afterG = g(x);
  trace('after g')(afterG);
  const afterF = f(afterG);
  trace('after f')(afterF);
  return afterF;
}

doStuffTrace(28)