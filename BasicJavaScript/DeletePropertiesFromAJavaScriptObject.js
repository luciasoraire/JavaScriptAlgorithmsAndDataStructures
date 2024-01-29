/*También podemos eliminar propiedades de objetos de esta forma:

delete ourDog.bark;
Ejemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
Después de la última línea mostrada anteriormente, ourDog se ve así:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
Elimina la propiedad tails de myDog. Puedes usar tanto la notación de puntos como la notación de corchetes.*/


const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  delete myDog.tails;