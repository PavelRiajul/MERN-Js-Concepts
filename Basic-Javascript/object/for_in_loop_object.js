var MyLaptop ={
    brand:"Apple",
    screen:"16inc",
    ram:"16GB",
    disk:"1000ssd",
    pocessor:"core-i7"
    
}

//amra object er property gola ber korbo (for in loop use kore)
for(let property in MyLaptop){
    //console.log(property)
}

//akhon amra object property golar value ber korbo
for(let item in MyLaptop){
    console.log(item+':' +MyLaptop[item])
}