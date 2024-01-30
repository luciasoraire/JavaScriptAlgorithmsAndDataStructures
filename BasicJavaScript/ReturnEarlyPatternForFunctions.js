/*Cuando se alcanza una sentencia return, la ejecución de la función actual se detiene y el control se devuelve a la ubicación de la llamada.

Ejemplo

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
Lo anterior mostrará la cadena Hello en la consola y devolverá la cadena World. La cadena byebye nunca se mostrará en la consola, porque la función termina en la sentencia return.

Modifica la función abTest para que cuando a o b sean menores que 0 la función salga inmediatamente con un valor undefined.

Pista
Recuerda que undefined es una palabra clave, no una cadena.*/


function abTest(a, b) {
    if((a<0) || (b<0)){
  return undefined
    }
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);