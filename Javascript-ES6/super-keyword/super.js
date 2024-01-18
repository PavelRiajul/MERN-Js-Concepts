class parant{
    hello1(){
        console.log("hello 1 function")
    }
}

class child extends parant{
    demo(){
        super.hello1()
    }
}
var obj = new child();
obj.demo()