//map
//map hocche -> collection/group of data. jeei  collection er bitore  prottek ta datar jonno alada alada key thakee.
//moloto key are data ae 2 ta ke bola hocche (key value pairing)

//duplicate value return kora jai
var mymap = new Map();

mymap.set("key1", "Bangladesh")
mymap.set("key2", "india")
mymap.set("key3", "maldiv")
mymap.set("key4", "china")

// all value return
//console.log(mymap.values())

// allkey return
//console.log(mymap.keys())



//bangladesh and india ke delete kore debe
//ami chacchi loop chalanor agee bangladesh are india ke delete kore debo.
//mymap.delete("key1")
//mymap.delete("key2")

//clear() sobgula ke delete kore debe->loop chalanor agee sobgola value ke delete/clear kore deba.
//mymap.clear()

//....................................................................
//amra for of loop use kore sob golo key er value ber korbo
//  for(let myValue of mymap.values()){
//  console.log(myValue)
//  }

//.......................................................................
//amra sob golo key ber korbo
// for(let myKey of mymap.keys()){
    // console.log(myKey)
    // }


//spacifice key return get()method
//console.log(mymap.get("key4"))

//has(key) method ase kina check kore
if(mymap.has("key3")){
    console.log("yes")
}else{
    console.log("No")
}

/*
for(let myKey of mymap.keys()){
    console.log(myKey)
}*/
