/*var variable;

variable = "Esta variable esta para testear 'algo'...";

console.log(variable);*/

/*var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        var saludo = "Hola mundo!";
        var avisoDeError = "Ups! No se pudo cargar el saludo...";
        //var saludo = false;

        if(saludo) {
            resolve(saludo);
        }else {
            reject(avisoDeError);
        }
    }, 4000);
});

saludar
    .then(resultado => {
        alert(resultado);
    })
    .catch(err => {
        alert(err);
});*/

var claveSecreta;
var claveIngresada;
var mensaje;
var mensajeDos;
var notificacion;

claveSecreta = 1234;
mensaje = "Ingrese la 'clave secreta'";
mensajeDos = "Escriba aqui";

claveIngresada = prompt(mensaje,mensajeDos);

notificacion = new Promise((resolve, reject) => {
    setTimeout(() => {
        var notificacionCorrecta = "La clave ingresada es correcta";
        var notificacionDeError = "Error! La clave ingresada es incorrecta";

        if(claveIngresada == claveSecreta) {
            resolve(notificacionCorrecta);
        }else {
            reject(notificacionDeError);
        }
    }, 4000);
});

notificacion
    .then(resultado => {
        alert(resultado);
    })
    .catch(err => {
        alert(err);
});