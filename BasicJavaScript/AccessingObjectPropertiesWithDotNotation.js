/*Hay dos maneras de acceder a las propiedades de un objeto: notación de puntos (.) y notación de corchetes ([]), similar a un arreglo.

La notación de puntos es lo que se usa cuando conoces el nombre de la propiedad a la que intentas acceder con antelación.

Aquí hay un ejemplo de cómo usar la notación de puntos (.) para leer la propiedad de un objeto:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1val tendrá una cadena con valor val1 y prop2val tendrá una cadena con valor val2.

Lee los valores de las propiedades de testObj utilizando la notación de puntos. Asigna la variable hatValue igual a la propiedad hat del objeto y asigna la variable shirtValue igual a la propiedad shirt del objeto.*/

const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  const hatValue = testObj.hat;     
  const shirtValue = testObj.shirt;    