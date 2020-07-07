//Composing functions Intentionally: One line for index.js methods
const g = n => n + 1;
const f = n => n * 2;

const doStuffBetter = x => f(g(x));

let el = document.getElementById('console-response')
el.innerHTML = `Composing functions Intentionally Answer: f(g(x)) for 'doStuffBetter(20)':<br> =>\t${doStuffBetter(20)}`;

el.innerHTML += "<br><br> ine"

