/*Puedes ejecutar el mismo código múltiples veces usando un bucle.

El tipo más común de bucle de JavaScript se llama bucle for porque se ejecuta "por" un número específico de veces.

Los bucles for se declaran con tres expresiones opcionales separadas por punto y coma:

for (a; b; c), donde a es la sentencia de inicialización, b es la sentencia condicional, y c es la expresión final.

La sentencia de inicialización se ejecuta una sola vez antes de que el bucle comience. Normalmente se utiliza para definir y configurar tu variable de bucle.

La sentencia condicional es evaluada al principio de cada iteración del bucle y continuará siempre y cuando sea true. Cuando la condición sea false al inicio de la iteración, el bucle dejará de ejecutarse. Esto significa que si la condición comienza como falso, tu bucle nunca se ejecutará.

La expresión final se ejecuta al final de cada iteración del bucle, antes de la siguiente comprobación de condición y se utiliza normalmente para incrementar o disminuir tu contador de bucle.

En el siguiente ejemplo inicializamos con i = 0 e iteramos mientras nuestra condición i < 5 es verdadera. Incrementaremos i por 1 en cada iteración de bucle con i++ como nuestra expresión final.

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
ourArray ahora tendrá el valor [0, 1, 2, 3, 4].

Usa un bucle for para empujar los valores desde el 1 al 5 en myArray.

*/

const myArray = [];

for(let i=1; i<6; i++){
  myArray.push(i);
}