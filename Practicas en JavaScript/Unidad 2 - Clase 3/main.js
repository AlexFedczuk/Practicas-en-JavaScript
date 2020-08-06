var nombre;
var altura;
var concatenar;
var datos;

nombre = "Alex";
altura = 182;
concatenar = nombre + " " + altura;

//alert("Hola mundo!");

/*document.write(nombre);
document.write(altura);*/

//document.write(concatenar);

//datos = document.getElementById("datos");

//datos.innerHTML = concatenar;

/*datos.innerHTML = `
    <h1> Soy la cajita de datos </h1>
    <h3> Mi nombre es: ${nombre} </h3>
    <h3> Mi altura es: ${altura} cm </h3>
`;*/

//Esto son Condicionales
/*if(altura > 160) {
    datos.innerHTML = `
    <h3> Sos una persona alta! </h3>
    `
}else{
    datos.innerHTML = `
    <h3> Sos una persona bajita! </h3>
    `
}*/

/*if(altura > 160) {
    datos.innerHTML += `
    <h3> Sos una persona alta! </h3>
    `
}else{
    datos.innerHTML += `
    <h3> Sos una persona bajita! </h3>
    `
}*/

//Esto es un Ciclo FOR
/*for(var i = 0; i < 5; i++) {
    //Esto seria un bloque de instrucciones...
    datos.innerHTML += `
    <h4> Cuanto es 1 + ${i}? Es ${i+1} </h4>
    `
}*/

function mostrarMiNombreYAltura(nombre, altura) {
    var datos = `
    <h1> Soy la cajita de datos </h1>
    <h3> Mi nombre es: ${nombre} </h3>
    <h3> Mi altura es: ${altura} cm </h3>
    `;

    return datos;
}

function imprimirMisDatos() {
    var datos;

    datos = document.getElementById("datos");

    datos.innerHTML = mostrarMiNombreYAltura(nombre, altura);
}

imprimirMisDatos();


