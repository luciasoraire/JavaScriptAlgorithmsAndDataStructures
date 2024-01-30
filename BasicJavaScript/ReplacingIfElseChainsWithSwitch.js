/*Si tienes muchas opciones entre las que elegir, una sentencia switch puede ser más fácil de escribir que muchas sentencias if/else if encadenadas. Lo siguiente:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
puede reemplazarse por:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
Cambia la cadena de sentencias if/else if por una sentencia switch.*/

function chainToSwitch(val) {
    let answer = "";

    switch(val){
      case "bob":return "Marley";
      break;
      case 42:return "The Answer";
      break;
      case 1:return "There is no #1";
      break;
      case 99:return "Missed me by this much!";
      break;
      case 7:return "Ate Nine";
      break;
    }
  

    return answer;
  }
  
  chainToSwitch(7);