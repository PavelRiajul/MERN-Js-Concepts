//()=>{}  Arrow function

var myArrow = ()=>{
    console.log('my first arrow function')
}
myArrow()

var arrow = (x)=>{
console.log(x)
}
arrow("Riajul islam")

//rest parameter use  arrow function
var newFun =(...z)=>{
    console.log(z)
}
newFun(23,45,67,89,9,8)


//Arrow function return
var ood =()=>{
    return 'hello'
}
console.log(ood())

let num =(a,b,c)=>{
return a+b+c
}

console.log(num(34,56,78))