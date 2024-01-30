/*A veces tendrás que probar más de una cosa a la vez. El operador lógico and (&&) devuelve true si y solo si los operandos a la izquierda y a la derecha son verdaderos.

Se podría lograr el mismo efecto anidando una sentencia if dentro de otra if.

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
Este código devolverá Yes si num es mayor que 5 y menor que 10. La misma lógica se puede escribir con el operador lógico and.

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
Reemplaza las dos sentencias if por una sola, usando el operador &&, el cual devolverá la cadena Yes si val es menor o igual a 50 y mayor o igual a 25. De lo contrario, devolverá la cadena No.*/

function testLogicalAnd(val) {


    if (val<=50 && val >=25) {
      return "Yes"
    }
    else{
      return "No"
    }
  
  
  }
  
  testLogicalAnd(10);