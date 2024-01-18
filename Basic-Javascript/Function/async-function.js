//async() function
//jokhon amra regular function lekhbo tokhon async lekhbo regular function keyword er agee.
//jokhon amra arrow function lekhbo tokhon async lekhbo paranthish() er agee.

//why async?
//jotokkhon porjonto kaj complete hoy ni ,totkkhon porjonto next step a jete parbe na.
//exmple-> akta video upload dela, oi upload preses ta jotokkhon porjonto complete hoy ni,totokkhon porjonto onno kono presess are sekhane cxecute hobe na.

//Async amra keno use korbo?
//jokhon amader function er bitore kono haybi  compotion thakbe,seei presess ta complete korte somoy lagee,tokhon amra oi function er bitore async use korbo.

//await(time cilling presess/opekkha), jotokkhon porjonto kaj ta complete hobe na, totokkhon porjonto opekkha korte hobe.next step a jete parbe na.await use korle.
//async-await -> hocche jora 

//kono function a await thakle, function er signeture a async thakte hobe.

//Regular function
//  async function onSignUp(){
    // console.log('I am Sign up')
// }

//Arrow function
// let onlogin = async()=>{
    // console.log('I am Login')
// }
// onlogin()
// onSignUp()

//akhon ami onlogine() function ta agee call koresi,and onSignUp() function ta pore call koresi.
//ami chacchi -> jotokkhon porjonto amar onlogin() function er kaj complete hoy ni ,totkkhon porjonto  jeno amar onSignUp() function ta call na hoy. tar jonno amra async use korsi


///....................exmple2

 async function Fun1(){
   await fetch('https://dummyjson.com/products/1')

}

async function Fun2(){
   await  fetch('https://dummyjson.com/products/1')

}

Fun1()
Fun2()

//ami chacchi --> jotokhon porjonto amar Fun1()  er kaj complete na hoy ,totokkhon porjonto amar Fun2() call hobe na.tar mane Fun1 agee call hobe ,Fun2 pore call hobe.tar jonno amra async-await use korbo