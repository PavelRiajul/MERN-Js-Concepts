//array filter holo --> kono item ke khoje ber kora.
//tar mane -> kolpona kori akta array er bitore 20 theke boro sob golo number amar chai ba 50 theke soto sob golo number chai,and akta array er bitore sobgola even/odd number gola chai

//50 theke soto sob gola number chai.
/*var myArray = [12,34,56,78,98,76,54,3]
 var result = myArray.filter(function(item){
    return item<50
})
console.log(result)*/

//50 theke boro sob gola number chai
// let myArray = [12,34,56,78,98,76,54,3]
// let result = myArray.filter(function(item){
    // return item>50
// })
// console.log(result)

//akta array er bitore sob gola  even.odd number gola amar chai
let myArray = [12,34,56,78,98,76,54,3]
let result = myArray.filter(function(item){
    return item % 2==0
})
console.log(result)