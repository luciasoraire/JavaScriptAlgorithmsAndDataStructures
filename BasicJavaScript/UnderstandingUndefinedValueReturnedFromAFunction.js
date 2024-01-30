/*Una función puede incluir la declaración de devolución (return) pero no tiene por qué hacerlo. En el caso de que la función no tenga una declaración de devolución (return), cuando la llames, la función procesa el código interno, pero el valor devuelto es undefined (indefinido).

Ejemplo

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSum es una función sin una declaración de devolución (return). La función cambiará la variable global sum pero el valor devuelto de la función es undefined.

Crea una función addFive sin ningún argumento. Esta función suma 5 a la variable sum, pero su valor devuelto es undefined.*/

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
    sum = sum + 5;
}
addThree();
addFive();