/*Puedes ejecutar el mismo código múltiples veces usando un bucle.

El primer tipo de bucle que aprenderemos se llama bucle while porque ejecuta una condición específica mientras esta sea verdadera, y se detiene una vez que esa condición ya no sea verdadera.

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
En el ejemplo de código anterior, el bucle while se ejecutará 5 veces y añadirá los números de 0 a 4 a ourArray.

Intentemos construir un bucle while para que funcione empujando valores a un arreglo.

Agrega los números de 5 a 0 (inclusivo) en orden descendente a myArray usando un bucle while.*/

const myArray = [];
let i=5;

while (i>=0){
  myArray.push(i);
  i--;
}
