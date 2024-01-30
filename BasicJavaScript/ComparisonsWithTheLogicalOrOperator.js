/*El operador lógico or (||) devuelve true si cualquiera de los operandos es true. De lo contrario, devuelve false.

El operador lógico or se compone de dos símbolos de barra vertical: (||). Este se puede encontrar normalmente entre las teclas de tabulación y escape.

El patrón de abajo debe parecer familiar desde los puntos de referencia anteriores.

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
Este código devolverá Yes si num está entre 5 y 10 (5 y 10 incluidos). La misma lógica se puede escribir con el operador lógico o.

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Combina las dos sentencias if en una sola sentencia que devuelva la cadena Outside si val no está entre 10 y 20, inclusivo. De lo contrario, devuelve la cadena Inside.

*/

function testLogicalOr(val) {


    if ((val<10)||(val>20)) {
      return "Outside";
    }
    else {
    return "Inside";
    }
    }
  
  testLogicalOr(15);