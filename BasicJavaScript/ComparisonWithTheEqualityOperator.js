/*Hay muchos operadores de comparación en JavaScript. Todos estos operadores devuelven un valor booleano true o false.

El operador más básico es el de igualdad ==. El operador de igualdad compara dos valores y devuelve true si son equivalentes o false si no lo son. Ten en cuenta que una igualdad es diferente a una asignación (=), la cual asigna el valor a la derecha del operador a la variable de la izquierda.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
Si myVal es igual a 10, el operador de igualdad devuelve true, así que el código dentro de los corchetes se ejecutará y la función devolverá Equal. De lo contrario, la función devolverá Not Equal. Para que JavaScript compare dos tipos de datos diferentes (por ejemplo, numbers y strings), tiene que convertir un tipo a otro. Esto se conoce como coerción de Tipo. Sin embargo, una vez lo hace, puede comparar términos como se ve a continuación:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
Agrega el operador de igualdad a la línea indicada para que la función devuelva la cadena Equal cuando val sea equivalente a 12.*/


function testEqual(val) {
    if (val==12) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);