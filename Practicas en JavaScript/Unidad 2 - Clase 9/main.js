var autoMovil;

autoMovil = {
    modelo: "Peugeot 308",
    precio: 741.6,
    velocidadMaxima: 235,
    antiguedad: 2007,
    duenio: "Alex Fedczuk",
    mostrarDatos () {
        console.log(this.modelo,
            this.precio,
            this.velocidadMaxima,
            this.antiguedad,
            this.duenio);
    }
};

document.write("<p> El modelo del automovil es " + autoMovil.modelo +
 ", con un precio al rededor de " + autoMovil.precio +
  " pesos argentinos. Tiene una velocidad maxima de " + autoMovil.velocidadMaxima +
   "km/h. Este vehiculo fue anunciado al publico en el anio " + autoMovil.antiguedad +
    " y esta bajo la propiedad de su duenio: " + autoMovil.duenio +
     "." );
autoMovil.mostrarDatos();
console.log(autoMovil);

