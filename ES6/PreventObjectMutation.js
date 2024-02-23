/*Como se vio en el desafío anterior, la declaración const por sí sola no protege la información de la mutación. Para asegurar que tu información no cambie, JavaScript provee una función Object.freeze para prevenir la mutación de datos.

Cualquier intento de cambiar el objeto será rechazado, lanzando un error si el script se ejecuta en modo estricto (strict mode).

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
Las asignaciones obj.review y obj.newProp provocarán errores, porque nuestro editor se ejecuta en modo estricto por defecto, y la consola mostrará el valor { name: "FreeCodeCamp", review: "Awesome" }.

En este desafío vas a utilizar Object.freeze para prevenir el cambio de constantes matemáticas. Necesitas congelar el objeto MATH_CONSTANTS para que nadie pueda alterar el valor de PI, añadir o borrar propiedades.*/

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
  Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();