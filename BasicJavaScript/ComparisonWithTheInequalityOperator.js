/*El operador de desigualdad (!=) es lo opuesto al operador de igualdad. Esto quiere decir que no es igual, y devuelve false cuando la comparación de igualdad devuelva true y vice versa. Al igual que el operador de igualdad, el operador de desigualdad convertirá los tipos de datos mientras los compara.

Ejemplos

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
Agrega el operador de desigualdad != en la sentencia if para que la función devuelva la cadena Not Equal cuando val no sea equivalente a 99.*/

function testNotEqual(val) {
    if (val!=99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);