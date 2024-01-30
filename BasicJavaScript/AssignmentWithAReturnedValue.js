/*Si recuerda nuestra discusión sobre el almacenamiento de valores con el operador de asignación, todo lo que está a la derecha del signo de igualdad se resuelve antes de asignar el valor. Esto significa que podemos tomar el valor devuelto de una función y asignarlo a una variable.

Supongamos que hemos definido una función sum que suma dos números.

ourSum = sum(5, 12);
Llamar a la función sum con los argumentos 5 y 12 produce un valor de retorno de 17. Este valor de retorno se asigna a la variable ourSum.

Llama la función processArg con un argumento de 7 y asigna su valor de retorno a la variable processed.*/


let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
  
}

processed=processArg(7);