//without static
class myclass{
    hello(){
        console.log('Riajul islam')
    }
}
//function call obj create kore
var obj = new myclass()
obj.hello()

//with static
class addclass{
     static pavel(){
        console.log("Hello i am pavel")
    }
}

addclass.pavel()