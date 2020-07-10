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