const os = require('os');

// imprime la arquitectura de la computadora x86 x64
console.log(os.arch());

// imprime la plataforma (freBSD, OpenBSD, windows, linux, MacOS)
console.log(os.platform());

// imprime iformacion de cores disponibles
console.log(os.cpus());

// cantidad de cores
console.log(os.cpus().length);

// informacion de las señales y prioridad de sistemas
console.log(os.constants);

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }


console.log("BYTES: ", os.freemem());
console.log("KILOBYTES: ", kb(os.freemem()));
console.log("MEGABYTES: ", mb(os.freemem()));
console.log("GIGABYTES: ", gb(os.freemem()));

console.log("TOTAL MEM: ", gb(os.totalmem()));

//DIRECTORIO RAIZ DEL USUARIO
console.log("DIRECTORIO RAIZ:", os.homedir())
console.log("DIRECTORIO TEMPORAL:", os.tmpdir())

console.log("NOMBRE DE LA MAQUINA:", os.hostname());
console.log("INTERFACES DE RED:", os.networkInterfaces());
