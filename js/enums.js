///Customn slice

const sliceArray = (anim, beginSlice, endSlice) => {

  return anim.slice(beginSlice,endSlice)

}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
const sliced = sliceArray(inputAnim, 1, 3);

//console.log(sliced);

//Replacing splice with slice
const nonMutatingSplice = (cities) => {
 
  return cities.slice(0,3);

}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));

//Concatenation

function nonMutatingConcat(original, attach) {
  return original.concat(attach)
}
const first = [1, 2, 3];
const second = [4, 5];
let na = nonMutatingConcat(first, second);
console.log(first)
console.log(na)
