/*Es posible que hayas escuchado el término objeto (object) antes.

Los objetos son similares a los arreglos (arrays), excepto que en lugar de usar índices para acceder y modificar sus datos, accedes a los datos en objetos a través de propiedades (properties).

Los objetos son útiles para almacenar datos de forma estructurada y pueden representar objetos del mundo real, como un gato.

Por ejemplo, aquí hay un objeto de gato:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
En este ejemplo, todas las propiedades se almacenan como cadenas, como name, legs y tails. Sin embargo, también puedes utilizar números como propiedades. Incluso puedes omitir las comillas para las propiedades de cadenas de una sola palabra, de la siguiente manera:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
Sin embargo, si tu objeto tiene propiedades que no son cadenas, JavaScript las convertirá automáticamente en cadenas.

Crea un objeto que represente a un perro llamado myDog que contenga las propiedades name (una cadena), legs, tails y friends.

Puedes establecer estas propiedades del objeto a los valores que quieras, siempre y cuando name sea una cadena, legs y tails sean números, y friends sea un arreglo.*/

const myDog = {
    "name": "Simona",
    "legs": 4,
    "tails": 1,
    "friends": ["Coco", "Tom"]
    };