
const enRango = require('./utilidades'); 
const numeros = [5, 10, 25, 50, 60]; 

numeros.forEach(numero => {
    console.log(`El número ${numero}: ${enRango(numero)}`);
});
