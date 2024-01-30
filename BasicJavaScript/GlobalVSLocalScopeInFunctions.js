/*Es posible tener variables locales y globales con el mismo nombre. Cuando haces esto, la variable local tiene precedencia sobre la variable global.

En este ejemplo:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
La función myFun devolverá la cadena Head porque está presente la versión local de la variable.

Añade una variable local a la función myOutfit para sobrescribir el valor de outerWear con la cadena sweater.*/

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater"
  return outerWear;
}

myOutfit();