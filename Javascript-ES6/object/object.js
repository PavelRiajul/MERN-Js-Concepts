//object

var billgates ={
    shirt:'true',
    shirtcolor:'offwhite',
    smail:'true',
    swatter:'true'
}
//console.log(billgates)

//........................................................................
//nested object
var billgatespro={
    shirts:{
        color:'whitr',
        price:'23USD'
    },
    swatter:{
        color:'green',
        price:'12Usd',
        warm:'best',
        arr:['fruits','banana','mango','jackfruit']
    }
}
//console.log(billgatespro.shirts.color)//.notation
//console.log(billgatespro['shirts']['price'])//bracket notation

console.log(billgatespro.swatter.arr[0])