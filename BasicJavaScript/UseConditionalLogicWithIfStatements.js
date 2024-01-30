/*Las sentencias if son utilizadas para tomar decisiones en el código. La palabra clave if le dice a JavaScript que ejecute el código entre llaves bajo ciertas condiciones, definidas en los paréntesis. Estas condiciones son conocidas como condiciones booleanas (Boolean) y sólo pueden ser true o false.

Cuando la condición se evalúa como true, el programa ejecuta el comando dentro de las llaves. Cuando la condición booleana se evalúa como false, la sentencia dentro de las llaves no se ejecutará.

Pseudocódigo

si (la condición es verdadera) {
  la sentencia es ejecutada
}
Ejemplo

function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true) devuelve la cadena It was true y test(false) devuelve la cadena It was false.

Cuando test es llamada con un valor de true, la sentencia if evalúa myCondition (mi condición) para ver si es true o no. Puesto que es true, la función devuelve It was true. Cuando llamamos a test con un valor de false, myCondition no es true, la sentencia dentro de las llaves no se ejecuta y la función devuelve It was false.

Crea una sentencia if dentro de la función que devuelva Yes, that was true si el parámetro wasThatTrue es true y devuelva No, that was false en caso contrario.

*/

function trueOrFalse(wasThatTrue) {
  
    if(wasThatTrue==true){
      return "Yes, that was true"
    }
    else{
      return "No, that was false"
    }
  
  
  }