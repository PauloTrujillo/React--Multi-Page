import React from 'react';

const Example2 = () => {
    ImprimirConsola(2);
    testerObj.func1();
    testerObj.func2();
    console.log('Cuadrado(100): ', cuadrado(100));
    console.log('Cuadrado(100): ', cuadrado2(100));
    cuadrado(2)
    return (
        <div>
            <h1>Example2</h1>
            <p>Example2 page body content {Operacion(50, 10, '*')} </p>
        </div>
    );
};

/**
 * Realiza suma o multiplicacion deacuerdo al signo que se indica.
 * @param {*} x
 * @param {*} y
 * @param {*} tipo
 */
function Operacion(x, y, tipo) {
    let resultado = 0;
    if (tipo === '+') {
        resultado = x + y;
    } else {
        resultado = x * y;
    }
    return resultado;
}

function ImprimirConsola(noCiclos) {
    for (let i = 1; i <= noCiclos; i++) {
        console.log('Impresion No: ' + i);
    }
}

const cuadrado = (x) => x * x;
const cuadrado2 = x => x * x;


const testerObj  = {
    func1: function() {
        console.log('func1', this);
    }, 
    func2: () => {
        console.log('func2', this);
    } ,
};



export default Example2;
