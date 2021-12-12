function SoyUnMetodoAsync(myCallback){
    setTimeout(function(){
        console.log("Estoy siento asíncrona");
        myCallback();
    }, 1000)
}

function hola(nombre, myCallback){
    setTimeout(function(){
        console.log("Hola, "+ nombre);
        myCallback(nombre);
    }, 1500)
}

function adios(nombre, myCallback){
    setTimeout(function(){
        console.log("Adios, "+ nombre);
        myCallback();
    }, 1000)
}

console.log("iniciando proceso.....");

//SoyUnMetodoAsync(function(){
//    console.log("terminando proceso.....")
//});

// hola("Ever", function(){
//     adios("Ever", function(){
//         console.log("terminando proceso.....")
//     });
// });


// hola("Ever", function(){
//     console.log("terminando proceso.....")
// });
// adios("Ever", function(){
//     console.log("terminando proceso.....")
// });


