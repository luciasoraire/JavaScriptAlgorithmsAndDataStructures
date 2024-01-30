/*Podemos pasar valores a una función con argumentos. Puedes utilizar una declaración de devolución (return) para enviar un valor fuera de una función.

Ejemplo

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer tiene el valor 8.

plusThree toma un argumento para num y devuelve un valor igual a num + 3.

Crea una función timesFive que acepte un argumento, lo multiplique por 5y devuelva el nuevo valor.*/

function timesFive(num){
    let result = num *5;
    return result;
  }