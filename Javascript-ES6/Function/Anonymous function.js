//Anonymous function er kono name thakbe na.


/*var myFun = function(x){
    return x
}
console.log(myFun('hello'))

// rest parameter  anynomus
var fun = function(...x){
    return x
}
console.log(fun(12,34,55,66,7))


//function re-assign korle -pore jeta assign koresi seei function ta kaj korbe.
var myName = function(){
    return "pavel"
}
var myName = function(){
    return "Islam"
}
console.log(myName())*/

const sum = (function() {
    return function sum(x,y,z){
        return (x+y+z);
    };
  })();
  console.log(sum(1,2,3));
  
  




