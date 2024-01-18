//Rest Paremeter/
//akta function a jodi multiple parameter nete chai,tokhon rest parameter use korbo.

// function addMultiplenumber(...a){
// console.log(a)
// }
// addMultiplenumber(2,3,5,6,8,9,76,54,2,11)


//rest parameter bade joni amra jodi alada kono parameter inout nete chai tahole ,sobsomoy rest parameter agee debo.
//exmple:
 function restp(a,b,...c){
 console.log(c)
 return a+b
 }
 var single= restp(10,40)
 console.log(single)
 restp(23,4,5,6,7,89)