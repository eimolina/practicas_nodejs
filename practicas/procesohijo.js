const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, sterr) =>{
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

// exec('node consola.js', (err, stdout, sterr) =>{
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
    console.log("¿Esta muerto?:", proceso.killed);
    console.log(dato.toString())
});

proceso.on('exit', () => {
    console.log("El proceso Termino");
    console.log("¿Esta muerto?:", proceso.killed);
});

proceso.on('close', () => {
    console.log("El proceso Se cerro");
    console.log("¿Esta muerto?:", proceso.killed);
});