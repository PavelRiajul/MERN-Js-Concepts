/*class Myclass{
    constructor(){
        console.log("Hello im constructor")
    }
}
//constructor method call
new Myclass()*/



//constructor er betor parameter pass
class myclass{

    constructor(a,b){
//console.log(a+b)
this.firstNum = a
this.secondNum = b

    }
    add(){
     let result =   this.firstNum+this.secondNum
     console.log(result)
    }
}
var obj =new myclass(23,45)
obj.add()

class myadd{
    constructor(a,b){
console.log(a+b)
    }
}
new myadd(53,45)