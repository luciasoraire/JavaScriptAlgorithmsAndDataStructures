/*Puede recordar de la comparación con el operador de igualdad que todos los operadores de comparación devuelven un valor booleano true o false.

A veces la gente usa una sentencia if/else para hacer una comparación, como esta:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
Pero hay una mejor manera de hacer esto. Puesto que === devuelve true o false, podemos devolver el resultado de la comparación:

function isEqual(a, b) {
  return a === b;
}
Corrige la función isLess para eliminar las sentencias if/else.*/

function isLess(a, b) {
  
      return a<=b;
    
  }
  
  isLess(10, 15);