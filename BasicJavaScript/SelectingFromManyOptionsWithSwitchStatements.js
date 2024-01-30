/*Si necesitas coincidir un valor contra muchas opciones, puedes usar una sentencia switch. Una sentencia switch compara el valor para las sentencias case las cuales definen varios posibles valores. Cualquier sentencia válida JavaScript puede ser ejecutada dentro de un bloque case y se ejecutará desde el primer valor de coincidencia case hasta que un break sea encontrado.

Aquí hay un ejemplo de una declaración switch:

switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
Los valores en las sentencias case se prueban con igualdad estricta (===). El break le dice a JavaScript que deje de ejecutar declaraciones. Si se omite break, se ejecutara la siguiente sentencia.

Escribe una declaración switch que pruebe val y establezca answer con las siguientes condiciones:
1 - alpha
2 - beta
3 - gamma
4 - delta*/

function caseInSwitch(val) {
    let answer = "";

  switch(val){
    case 1: return "alpha";
    break;
    case 2: return "beta";
    break;
    case 3: return "gamma";
    break;
    case 4: return "delta";
    break;
  
  }
  

    return answer;
  }
  
  caseInSwitch(1);