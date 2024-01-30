/*El operador mayor que (>) compara los valores de dos números. Si el número a la izquierda es mayor que el número a la derecha, devuelve true. De lo contrario, devuelve false.

Al igual que el operador de igualdad, el operador mayor que convertirá los tipos de datos de valores mientras los compara.

Ejemplos

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
Agrega el operador mayor que a las líneas indicadas para que las declaraciones de devolución tengan sentido.

*/

function testGreaterThan(val) {
    if (val>100) {  // Cambia esta línea
      return "Over 100";
    }
  
    if (val>10) {  // Cambia esta línea
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);