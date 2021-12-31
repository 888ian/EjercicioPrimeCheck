/*
Un número primo es aquel que solo es divisible por 1 y sí mismo. A su vez, un número
es primo si no es divisible por los números primos que lo anteceden hasta su raíz
cuadrada. Ejemplo, para saber si 9833 es primo debería ser dividido al menos por
todos los números primos anteriores hasta su raíz cuadrada, en este caso 99. Si no es
divisible por ninguno de ellos entonces podemos decir que es primo.
Se requiere una interfaz que permita saber si un número es o no primo
*/

//main

function esPrimo(num) {
  //El 1,0 o números negativos hardcoded
  if (num <= 1) {
    return false;
  }

  //Declaro sqrt como la raíz del número
  const sqrt = Math.sqrt(num);

  /*Como dice el ejemplo voy a ir probando dividir al numero por 
  todos los numeros primos (y no primos) anteriores a su raíz cuadrada*/
  for (let divisor = 2; divisor <= sqrt; divisor++) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
}

var butt = document.getElementById("button");
butt.onclick()

/*testeo

console.log(esPrimo(1), " Esto debería ser false");
console.log(esPrimo(2), " Esto debería ser true");

const primes = require('primes.json');

primes.forEach(element => {
    if(esPrimo(element) === false){
        console.log("There is a problem: ", element)
    }
});
console.log("test finished");
*/
