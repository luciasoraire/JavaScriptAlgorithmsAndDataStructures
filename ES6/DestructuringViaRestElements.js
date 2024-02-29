/*En algunas situaciones que implican la desestructuración de arreglos, tal vez queramos recolectar el resto de elementos en un arreglo separado.

El resultado es similar a Array.prototype.slice(), como se muestra a continuación:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
La consola mostrará los valores 1, 2 y [3, 4, 5, 7].

Las variables a y b toman el primer y segundo valor del arreglo. Luego de esto, debido a la presencia de sintaxis rest arr obtiene el rest de los valores en forma de un arreglo. El elemento rest sólo funciona correctamente como la última variable en la lista. Es decir, no se puede utilizar la sintaxis rest para capturar un sub arreglo que deje fuera el último elemento del arreglo original.

Utiliza una asignación de desestructuración con la sintaxis rest para emular el comportamiento de Array.prototype.slice(). removeFirstTwo() debe devolver un sub arreglo del arreglo original list con los dos primeros elementos omitidos.*/

function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);