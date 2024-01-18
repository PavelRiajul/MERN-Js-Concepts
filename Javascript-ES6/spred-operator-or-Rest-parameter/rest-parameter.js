//Rest Parameter
//Using rest parameter a function can be called with any number of arguments.
//Rest parameter is prefixed three dots(...)
//rest parameter er sathe aro parameter lekhle rest parameter er samne/ first a  debo.

function calculation(a,b,...numbers){
    var c = a + b
let sum =0;
for(let i of numbers){
    sum += i
    
}
console.log(sum)
console.log(c)


}
calculation(2,3,4,6,9,10)  //aekhan theke first 2ta arguments 2 are 3 ke represent korbe a,b parameter




