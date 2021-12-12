async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log("Hola, " + nombre);
            resolve(nombre);
        }, 1500)
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) =>{
        setTimeout(function () {
            console.log("Adios, " + nombre);
            resolve();
        }, 1000)
    });
}

async function hablar(nombre) {
    return new Promise((resolve,reject) => {
        setTimeout(function () {
            console.log("Bla bla bla bla bla.....");
            resolve();
            //reject("Hubo un error");
        }, 1000)
    })
}

async function main(){
    let nombre = await hola("Ever");
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}

console.log("Iniciando proceso....")
main();
console.log("Terminando proceso....")