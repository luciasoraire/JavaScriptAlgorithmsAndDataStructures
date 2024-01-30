/*Las variables que se declaran dentro de una función, así como los parámetros de la función tienen un ámbito local. Esto significa que sólo son visibles dentro de esa función.

Esta es una función myTest con una variable local llamada loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
La llamada a la función myTest() mostrará la cadena foo en la consola. La línea console.log(loc) (fuera de la función myTest) lanzará un error, ya que loc no está definido fuera de la función.

El editor tiene dos console.logs para ayudarte a ver lo que está sucediendo. Revisa la consola a medida que programas para ver cómo cambia. Declara una variable local myVar dentro de myLocalScope y ejecuta las pruebas.

Nota: La consola todavía mostrará el error ReferenceError: myVar is not defined, pero esto no causará que las pruebas fallen.

*/

function myLocalScope() {

    let myVar;  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  console.log('outside myLocalScope', myVar);