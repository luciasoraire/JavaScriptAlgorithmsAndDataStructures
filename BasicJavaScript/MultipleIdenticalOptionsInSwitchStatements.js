/*Si la sentencia break es omitida en un caso (case) de una sentencia switch, las siguientes sentencias case serán ejecutadas hasta encontrar un break. Si tienes múltiples entradas con la misma salida, puedes representarlas en una sentencia switch como esta:

let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Los casos 1, 2 y 3 producirán el mismo resultado.

Escribe una declaración switch para establecer answer con los siguientes rangos:
1-3 - Low
4-6 - Mid
7-9 - High

Nota: Necesitarás tener un case para cada número dentro del rango.

*/

function sequentialSizes(val) {
    let answer = "";
    switch(val){
      case 1:
      case 2:
      case 3:
      answer= "Low";
      break;
      case 4:
      case 5:
      case 6:
      answer= "Mid";
      break;
      case 7:
      case 8:
      case 9:
      answer= "High";
      break;
    }
    return answer;
  }
  
  sequentialSizes(1);