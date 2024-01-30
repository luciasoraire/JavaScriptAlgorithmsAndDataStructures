/*El operador mayor o igual que (>=) compara el valor de dos números. Si el número de la izquierda es mayor o igual que el número de la derecha, devuelve true. De lo contrario, devuelve false.

Al igual que el operador de igualdad, el operador mayor o igual que convertirá los tipos de datos mientras los compara.

Ejemplos

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
Agrega el operador mayor o igual que a las líneas indicadas para que el valor devuelto tenga sentido.

*/

function testGreaterOrEqual(val) {
    if (val>=20) {  
      return "20 or Over";
    }
  
    if (val>=10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);