 //simple way obj
 /*let person={
    first_name:"Riajul",
    last_Name:"Islam",
    age: 22,
    getNum:()=>{
        return person.first_name +" " +person.last_Name;
    }
}

console.log(person.first_name)
console.log(person.last_Name)
console.log(person.getNum())*/

//class akare lekhbo obj ke class ke convert sobidar jonno

class person{
    first_name="Riajul";
    last_Name="Islam";
    age= 22;
    getNUm=()=>{
    return this.first_name + " " +this.last_Name
}

}

//class console  //p1,p2,p3 jotobar khusi totbar obj creat korte pari
let p1 = new person()
console.log(p1)
console.log(p1.getNUm())
