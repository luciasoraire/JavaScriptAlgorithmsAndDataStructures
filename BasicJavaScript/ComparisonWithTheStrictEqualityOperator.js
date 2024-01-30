/*La estricta igualdad (===) es la contraparte del operador de igualdad (==). Sin embargo, a diferencia del operador de igualdad, el cual intenta convertir ambos valores comparados a un tipo común, el operador de estricta igualdad no realiza una conversión de tipo.

Si los valores que se comparan tienen diferentes tipos, se consideran desiguales, y el operador de estricta igualdad devolverá falso.

Ejemplos

3 ===  3  // true
3 === '3' // false
En el segundo ejemplo, 3 es de tipo Number (número) y '3' es de tipo String (cadena).

Usa el operador de estricta igualdad en la sentencia if para que la función devuelva la cadena Equal cuando val sea estrictamente igual a 7.

*/


function testStrict(val) {
    if (val===7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);