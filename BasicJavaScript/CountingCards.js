/*Escribirás una función para contar cartas. Recibirá un parámetro card (carta) que puede ser un número o una cadena y aumentar o reducir la variable global count (conteo) de acuerdo al valor de la carta (observa la tabla). La función devolverá una cadena con el conteo actual y la cadena Bet (Apuesta) si el conteo es positivo, o Hold (Espera) si el conteo es cero o negativo. El conteo actual y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio.

Resultados de ejemplo: -3 Hold o 5 Bet

Sugerencia
NO reinicies count a 0 cuando el valor sea 7, 8 o 9. NO devuelvas un arreglo.
NO incluyas comillas (individuales o dobles) en el resultado.

*/

let count = 0;

function cc(card) {

if((card==2) || (card==3) || (card==4) || (card==5) ||(card==6)){
  count=count+1;
}

else if((card==10) || (card=="J") || (card=="Q") || (card=="K") || (card=="A")){
  count=count-1;
}

if(count>0){
    return count + " Bet"
  }
else{
    return count+" Hold"
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');