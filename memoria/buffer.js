// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 5]);


// Creo que es importante destacar que el buffer no almacena 
// los datos en binario, ya que cada espacio 
// tiene 2 dígitos (almacenamiento hexadecimal).
let buffer = Buffer.from('Hola');

// console.log(buffer);

// --

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc.toString());
