const arr0 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

// Type your code below this line!
let cadena = ""
for (let i = 0; i < arr0.length - 1; i++ ){
    cadena += String(arr0[i]) + ","
}
cadena += arr0[arr0.length - 1]

console.log(cadena)

// Type your code above this line!
console.log("hola")