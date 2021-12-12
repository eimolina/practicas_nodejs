console.log("Metodo de log");
console.info("Metodo info");
console.error("Metodo de error");
console.warn("Metodo de warn");

var table = [
    {a:1, b:'Z'},
    {a:2, b:'Otra'}
]

console.table(table);

console.group("Informacion de modulo");
console.log("Metodo de log");
console.info("Metodo info");
console.error("Metodo de error");
console.warn("Metodo de warn");
console.groupEnd();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.log('-----------------');

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');