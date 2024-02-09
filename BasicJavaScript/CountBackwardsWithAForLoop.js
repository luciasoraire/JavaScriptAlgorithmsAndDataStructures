/*Un bucle for también puede contar hacia atrás, siempre que definamos las condiciones adecuadas.

Para poder disminuirle dos cada iteración, necesitaremos cambiar nuestra inicialización, condición, y expresión final.

Empezaremos en i = 10 e iteraremos mientras i > 0. Disminuiremos i en 2 por cada bucle con i -= 2.

const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
ourArray ahora contendrá [10, 8, 6, 4, 2]. Ahora cambiemos el valor de inicialización y la expresión final de nuestro bucle para que podamos contar hacia atrás de dos en dos y así crear un arreglo descendente de números impares.

Inserta los números impares desde el 9 hasta el 1 en myArray utilizando un bucle for.*/

const myArray = [];

for(let i=9; i>0; i-=2){
  myArray.push(i);
}