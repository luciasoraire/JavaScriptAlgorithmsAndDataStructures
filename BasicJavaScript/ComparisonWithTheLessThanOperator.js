/*El operador menor que (<) compara los valores de dos números. Si el número a la izquierda es menor que el número a la derecha, devuelve true. De lo contrario, devuelve false. Al igual que el operador de igualdad, el operador menor que convertirá los tipos de datos mientras los compara.

Ejemplos

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
Agrega el operador menor que a las líneas indicadas para que las declaraciones de devolución tengan sentido.*/

function testLessThan(val) {
    if (val<25) {  
      return "Under 25";
    }
  
    if (val<55) {  
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);