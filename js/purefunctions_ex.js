const squareList = (arr) => {
  
  const x_arr = arr.filter(num => Number.isInteger(num) && num > 0
  ).map(num => num * num)
  return x_arr;
  
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
