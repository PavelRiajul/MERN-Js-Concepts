//rest parameter holo akta parameter deye onek golo value ke recive kora
function something(...combo){
    //console.log(combo[3])
    //console.log(combo)
}
something(23,45,67,8)

let addTwo = (...num)=>{
    //index number koto theke koto porjonto jug korbo ta bole debo
    return num[0]+num[1]

}
let res = addTwo(23,45,67,89,7,43)
console.log(res)