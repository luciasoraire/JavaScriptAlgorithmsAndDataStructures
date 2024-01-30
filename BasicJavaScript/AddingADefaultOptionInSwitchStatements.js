/*En una declaración switch puede que no seas capaz de especificar todos los valores posibles como declaraciones de case (caso). En su lugar, se puede añadir la declaración default, la cual se ejecutará si no se encuentran declaraciones case. Piensa en ella como la última sentencia else en una cadena if/else.

Una declaración default debe ser el último caso.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
Escribe una declaración switch para establecer answer con las siguientes condiciones:
a - apple
b - bird
c - cat
default - stuff*/

function switchOfStuff(val) {
    let answer = "";
   switch(val){
     case "a": 
     answer="apple";
     return answer;
     break;
      case "b": 
      answer="bird";
     return answer;
     break;
      case "c": 
      answer="cat";
     return answer;
     break;
     default: 
     answer="stuff";
     return answer;
     break;
   }
    return answer;
  }
  
  switchOfStuff(1);