function hola(nombre, callbackhola) {
    setTimeout(function () {
        console.log("Hola, " + nombre);
        callbackhola(nombre);
    }, 1500)
}

function adios(nombre, callbackadios) {
    setTimeout(function () {
        console.log("Adios, " + nombre);
        callbackadios();
    }, 1000)
}

function hablar(callbackhablar) {
    setTimeout(function () {
        console.log("Bla bla bla bla bla.....");
        callbackhablar();
    }, 1000)
}

function conversacion(nombre, veces, callback){
    if(veces >= 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })
    }else{
        callback(nombre);
    }
}

console.log("Iniciando Proceso...");

hola("Ever", function(nombre){
    conversacion(nombre, 3, function(){
        console.log("Proceso Terminado");
    })
});

// hola("Ever", function () {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 hablar(function () {
//                     hablar(function () {
//                         adios("Ever", function () {
//                             console.log("terminando proceso.....")
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// hola("Ever", function(){
//     adios("Ever", function(){
//         console.log("Terminamos")
//     });
// });
