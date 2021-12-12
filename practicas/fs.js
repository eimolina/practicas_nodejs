const fs = require("fs");

function leer(ruta, cb){
    fs.readFile(ruta, (err, data)=>{
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, (err) =>{
        if(err){
            cb("Ha ocurrido un error");
        }else{
            cb("Se escribio correctamente");
        }
    })
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb);
}


//leer(__dirname + "/archivo1.txt", console.log);
//escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log);
borrar(__dirname + "/archivo1.txt", console.log);
