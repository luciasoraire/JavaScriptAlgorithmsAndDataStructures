/*Después de haber creado un objeto de JavaScript, puedes actualizar sus propiedades en cualquier momento tal y como actualizarías cualquier otra variable. Puedes utilizar tanto la notación de puntos como la notación de corchetes para actualizar.

Por ejemplo, veamos ourDog:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
Puesto que es un perro particularmente feliz, vamos a cambiar su nombre por la cadena Happy Camper. Así es como actualizamos la propiedad del nombre del objeto: ourDog.name = "Happy Camper"; o ourDog["name"] = "Happy Camper";. Ahora cuando evaluamos ourDog.name, en lugar de obtener Camper, vamos a obtener su nuevo nombre, Happy Camper.

Actualiza la propiedad nombre del objeto myDog. Cambiemos su nombre de Coder a Happy Coder. Puedes utilizar tanto la notación de puntos como la notación de corchetes.*/

const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.name="Happy Coder";
  