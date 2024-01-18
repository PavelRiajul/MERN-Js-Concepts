/*class perent{
    hello1(params){
        console.log("hello 1 function")
    }
    hello2(params){
        console.log("Hello 2 function")
    }
}

class chiled extends perent{

}

var obj = new chiled();
obj.hello1()
obj.hello2()*/


// child modify function  overriding priborton kora
class perent{
    hello1(){
        console.log("hello 1 function")
    }
    hello2(){
        console.log("Hello 2 function")
    }
}

class chiled extends perent{
    hello1(){
        console.log("hello 1 function hello 1 function hello 1 function hello 1 function")
    }
    hello2(){
        console.log("Hi I am Riajul islam I am 22 years old")
    }
}

var obj = new chiled();
obj.hello1()
obj.hello2()



//
