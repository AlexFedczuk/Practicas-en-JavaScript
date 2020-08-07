// Las variables que representan las opciones del jugador.
var piedra = 1;
var papel = 2;
var tijera = 3;
// La variable que contendra la opcion elegida por el jugador.
var opcionDelBOT;
var opcionDelJugador;
// Las variables que contaran las "victorias" del BOT o el jugador. 
var contadorDelBOT = 0;
var contadorDelJugador = 0;
// Finalizador de la partida.
var end = false;

do {
    opcionDelBOT = Math.floor((Math.random() * 3) + 1);
    opcionDelJugador = prompt("Eliga una opcion: Piedra(1), Papel(2) o Tijera(3)","Ingrese un numero");

    contadorDelJugador = procesarJugador(piedra,papel,tijera,opcionDelJugador,opcionDelBOT,contadorDelJugador);
    contadorDelBOT = procesarBOT(piedra,papel,tijera,opcionDelJugador,opcionDelBOT,contadorDelJugador);

    mostrarInfoDeLasRondas(contadorDelBOT, contadorDelJugador);

    end = procesarContadores(contadorDelJugador,contadorDelBOT);

} while(end==false);

console.log("-El contador de rondas FINAL del BOT: " +contadorDelBOT);
console.log("-El contador de rondas FINAL del Jugador: " +contadorDelJugador);

//---Funciones del juego---

function procesarJugador(piedra,papel,tijera,opcionDelJugador,opcionDelBOT,contadorDelJugador){
    
    if(opcionDelJugador==piedra && opcionDelBOT==tijera){
        contadorDelJugador++;
    }else{
        if(opcionDelJugador==papel && opcionDelBOT==piedra){
            contadorDelJugador++;
        }else{
            if(opcionDelJugador==tijera && opcionDelBOT==papel){
                contadorDelJugador++;
            }
        }
    }

    return contadorDelJugador;
}

function procesarBOT(piedra,papel,tijera,opcionDelJugador,opcionDelBOT,contadorDelJugador){

    if(opcionDelBOT==piedra && opcionDelJugador==tijera){
        contadorDelBOT++;
    }else{
        if(opcionDelBOT==papel && opcionDelJugador==piedra){
            contadorDelBOT++;
        }else{
            if(opcionDelBOT==tijera && opcionDelJugador==papel){
                contadorDelBOT++;
            }
        }
    }

    return contadorDelBOT;
}

function mostrarInfoDeLasRondas(contadorDelBOT,contadorDelJugador){
    
    console.log("Rondas ganadas por el BOT: " +contadorDelBOT);
    console.log("Rondas ganadas por el Jugador: " +contadorDelJugador);
}

function procesarContadores(contadorDelJugador,contadorDelBOT,end){
    
    if(contadorDelJugador==3 || contadorDelBOT==3){
        end=true;
    }

    return end;
}