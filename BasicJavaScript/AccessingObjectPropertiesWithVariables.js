/*Otro uso de la notación de corchetes en objetos es acceder a una propiedad que está almacenada como el valor de una variable. Esto puede ser muy útil para iterar a través de las propiedades de un objeto o para acceder a una tabla de búsqueda.

Aquí hay un ejemplo del uso de una variable para acceder a una propiedad:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
La cadena Doberman se mostrará en la consola.

Ten en cuenta que no utilizamos comillas alrededor del nombre de la variable cuando la usamos para acceder a la propiedad porque utilizamos el valor de la variable, no el nombre.

Asigna la variable playerNumber a 16. Luego, usa la variable para buscar el nombre del jugador y asignarlo a player.

*/


const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  
  const playerNumber = 16;  
  const player = testObj[playerNumber];   