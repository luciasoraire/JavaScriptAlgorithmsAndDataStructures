/*La función parseInt() analiza una cadena y devuelve un entero. A continuación, te presentamos un ejemplo:

const a = parseInt("007");
La función anterior convierte la cadena 007 al entero 7. Si el primer carácter de la cadena no puede ser convertido en un número, entonces devuelve NaN.

Utiliza parseInt() en la función convertToInteger para convertir la cadena de entrada str a un número entero, y devuélvelo.

*/

function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");