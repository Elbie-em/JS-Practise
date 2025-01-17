console.log('----Square List----');

const squareList = (arr) => {
  
  const x_arr = arr.filter(num => Number.isInteger(num) && num > 0
  ).map(num => num * num)
  return x_arr;
  
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);

console.log('----Sorting with with no mutation----');
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let sort_arr = [...arr];
  return sort_arr.sort();
}
console.log(nonMutatingSort(globalArray));

console.log('----Working with Split Method----');

function splitify(str) {
  return str.split(/\s|\W/);
}
console.log(splitify("Hello World,I-am code"));

console.log('----Join With Regex----');

function sentensify(str) {
  return str.match(/\w+/g).join(" ")
}
console.log(sentensify("May-the-force-be-with-you"));

console.log('---Convert String to some what URL---');

// The global variable
const globalTitle = " Winter Is Coming";


function urlSlug(title) {
  let nu = title.toLowerCase().match(/\S+/g).join("-");
  return nu;
}

console.log(urlSlug(globalTitle));