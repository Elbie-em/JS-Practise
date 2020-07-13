// Every at Work

var numbers = [1, 5, 8, 0, 7, 9];

const isLessThan10 = numbers.every((currentValue) => {
  return currentValue < 10;
});

console.log(isLessThan10);

//Check if every number is a positive

const checkPositive = (arr) => {
  const isPositive = arr.every((currentValue) => {
    return currentValue > 0;
  });

  return isPositive;
}

console.log(checkPositive([1, 2, 3, -4, 5]));

//Check if every number is a positive
const checkSomePositive = (arr) => {
  const isPositive = arr.some((currentValue) => {
    return currentValue > 0;
  });

  return isPositive;
}

console.log(checkSomePositive([1, 2, 3, -4, 5]));

console.log('-----Currying Functions-----')
//Currying functions
const add = x => y => z => x + y + z;
console.log(add(10)(20)(30));