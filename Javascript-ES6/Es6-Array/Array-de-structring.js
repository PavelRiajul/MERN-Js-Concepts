//de-structuring holo --> akta jinish ki benge fela/toka tokra kora.


/*var bangladesh = ['Dhaka','rongpur','khulna','borishal']
//array destructuring
var [,,,b]=bangladesh
console.log(b)*/


const array =['apple','banana','orange']
//array theke data count variable
//3 variable
/*var name = array[0]
var yourname = array[1]
var thats = array[2]
console.log(name)
console.log(yourname)*/

//.................
//array destructurnig shortcut just 1 variable
/*const [name, yourname,thats] =array;
console.log(name)
console.log(thats)*/

//multiple value count  (...spred-oparator) sobar last a dete hoy
// const numbers = [2,4,6,78,9]
// const [first,second,third,...res]=numbers;
// console.log(first)
// console.log(second)
// console.log(res)

//array swap 2tar odik  kora jabe na
// let a = 20;
// let b = 23;
// [a,b] = [b, a]
// console.log(a)
// console.log(b)


function pro ([first=34, second=56, third=889,fourth=77]){
    console.log(first) //output 34
    console.log(second)//56
    console.log(third)//889 defoult value
    console.log(fourth)//77
}
const myArray = [34,56,,77]
pro(myArray)