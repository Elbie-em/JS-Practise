//My own map method

// the global Array
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  let newArray = [];
  //this.forEach(a => newArray.push(callback(a)));
  for(let i = 0; i < this.length; i++){
    newArray.push(callback(this[i]));
  }

  return newArray;
};

var new_s = s.myMap(item => {
  return item * 2;
});

console.log(new_s);