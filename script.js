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

function onButtonClick() {
  var input = document.getElementById("input");
  let num = input.value;
  let isPrime = esPrimo(num);
  if (isPrime === false) {
    window.alert("El número no es primo");
  } else {
    window.alert("El número es primo");
  }
}

var butt = document.getElementById("butt");
butt.onclick = onButtonClick;
