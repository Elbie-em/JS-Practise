// A pure function example

const highpass = (cutoff,value) => value >= cutoff;

//Same input will always map out to same output value

console.log(highpass(5,5)); //true
console.log(highpass(5,5)); //true
console.log(highpass(5,5)); //true

// Many input values may map to same output value
console.log(highpass(5,123)); //true
console.log(highpass(5,6)); //true
console.log(highpass(5,18)); //true

console.log(highpass(5,1)); //false
console.log(highpass(5,3)); //false
console.log(highpass(5,2)); //false