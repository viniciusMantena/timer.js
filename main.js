"use strict"

var hr, min, seg;
var tempo = 1000;

function iniciar() {
    cronometro = setInterval(() => { temporizador(); }, tempo);
};

function pausar() {
    clearInterval(cronometro);
};

function parar() {
    hr = 0;
    min = 0;
    seg = 0;

    document.getElementById('contagem').innerText = "00:00:00"
};

function temporizador() {

    seg++;
    
    if (seg == 60) {

        seg = 0;
        min++;
        
        if (min == 60) {
            min = 0;
            hr++;
        }
    }

    var base = ( hr < 10 ? '0' + hr : hr) + ':' + ( min < 10 ? '0' + min : min) + ':' + ( seg < 10 ? '0' + seg : seg);
    document.getElementById('contagem').innerText = base;
};
