/*Los bucles "for" no tienen que iterar de uno en uno a la vez. Al cambiar nuestra final-expression (expresión final), podemos contar con números pares.

Empezaremos en i = 0 y realizaremos el bucle mientras i < 10. Incrementaremos i en 2 cada bucle utilizando i += 2.

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
ourArray ahora contendrá [0, 2, 4, 6, 8]. Cambiemos nuestra initialization (inicialización) para que podamos contar por números impares.

Inserta los números impares desde 1 hasta 9 en myArray utilizando un bucle for.*/

const myArray = [];

for(let i= 1; i<10; i+=2){
  myArray.push(i);
}