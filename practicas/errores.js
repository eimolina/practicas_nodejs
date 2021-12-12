function otrafuncion() {
    return serompe();
}

function serompe() {
    return 3 + z;
}

function serompeaAsync() {
    setTimeout(() => {
        return 3 + z;
    }, 2000);
}

function noSerompeaAsync(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (err) {
            console.error("Error controlado en funcion async")
            cb(err);
        }

    }, 2000);
}

// try{
//     serompe();
// }catch(err){
//     console.error("¡Vaya!, algo se ha roto");
// }

// try{
//     otrafuncion();
// }catch(err){
//     console.error("¡Vaya!, algo se ha roto");
// }

// AQUI SI SE ROMPE PORQUE EL ERROR OCURRE DESPUES.
// try {
//     serompeaAsync();
// } catch (err) {
//     console.error("¡Vaya!, algo se ha roto");
// }

try {
    noSerompeaAsync(console.log);
} catch (err) {
    console.error("¡Vaya!, algo se ha roto");
}