/*En los dos últimos desafíos, aprendimos sobre el operador de igualdad (==) y el operador de estricta igualdad (===). Vamos a hacer una rápida revisión y práctica utilizando estos operadores un poco más.

Si los valores que se comparan no son del mismo tipo, el operador de igualdad realizará una conversión de tipo y luego evaluará los valores. Sin embargo, el operador de estricta igualdad comparará tanto el tipo de datos como el valor tal como es, sin convertir un tipo a otro.

Ejemplos

3 == '3' devuelve true porque JavaScript realiza la conversión de tipo de cadena a número. 3 === '3' devuelve false porque los tipos son diferentes y la conversión de tipo no se realiza.

Nota: En JavaScript, puedes determinar el tipo de una variable o un valor con el operador typeof, de la siguiente manera:

typeof 3
typeof '3'
typeof 3 devuelve la cadena number y typeof '3' devuelve la cadena string.

La función compareEquality en el editor compara dos valores usando el operador de igualdad. Modifica la función para que devuelva la cadena Equal sólo cuando los valores son estrictamente iguales.*/

function compareEquality(a, b) {
    if (a === b) { // Cambia esta línea
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");