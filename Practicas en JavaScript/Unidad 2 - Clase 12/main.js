class coche {
    constructor(modelo, velocidadActual, antiguedad) {
        this.modelo = modelo;
        this. velocidadActual = velocidadActual;
        this. antiguedad = antiguedad;
    }
    
    aumentarVelocidad() {
        this.velocidadActual = this.velocidadActual + 1;
    }

    disminuirVelocidad() {
        this.velocidadActual = this.velocidadActual - 1;
    }
}

var cocheUno = new coche ("Peugot", 0, 2014);
var cocheDos = new coche ("Ford", 0, 2011);
var cocheTres = new coche ("Audi", 0, 2016);

console.log(cocheUno);
console.log(cocheDos);
console.log(cocheTres);

do {
    cocheUno.aumentarVelocidad();
    console.log("La velocidad del 'Coche Uno' es: " +cocheUno.velocidadActual+ "km/h.");
}while(cocheUno.velocidadActual < 50);

console.log(cocheUno);