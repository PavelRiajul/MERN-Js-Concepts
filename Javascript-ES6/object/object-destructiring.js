//object destructuring

/*const person={
    myname:"Riajul islam",
    myage:22,
    myprof:'Student'
}
console.log(person.myage)*/

//destructuring..
const person={
    myname:"Riajul islam",
    myage:22,
    myprof:'Student'
}
//destructuring
//const {myage, myprof,myname} =person;
const{myage:myageobj,myname:mynameobj,myprof:myprofobj} = person;
console.log(mynameobj)