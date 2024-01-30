/*El operador menor o igual que (<=) compara el valor de dos números. Si el número de la izquierda es menor o igual que el número de la derecha, devuelve true. Si el número a la izquierda es mayor que el número a la derecha, devuelve false. Al igual que el operador de igualdad, el operador menor o igual que convertirá los tipos de datos mientras los compara.

Ejemplos

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
Agrega el operador menor o igual que a las líneas indicadas para que el valor devuelto tenga sentido.*/

function testLessOrEqual(val) {
    if (val<=12) {  
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);