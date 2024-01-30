/*El orden es importante en las sentencias if, else if.

La función se ejecuta de arriba a abajo, por lo que habrá que tener cuidado con qué sentencia va primero.

Tomemos como ejemplo estas dos funciones.

Aquí está la primera:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
Y la segunda, simplemente cambia el orden de las sentencias:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
Mientras que estas dos funciones parecen casi idénticas, si pasamos un número a ambas, obtenemos diferentes salidas.

foo(0)
bar(0)
foo(0) devolverá la cadena Less than one, y bar(0) devolverá la cadena Less than two.

Cambia el orden lógico en la función para que devuelva el resultado correcto en todos los casos.*/

function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);