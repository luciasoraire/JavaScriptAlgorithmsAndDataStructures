/*La segunda manera de acceder a las propiedades de un objeto es con la notación de corchetes ([]). Si la propiedad del objeto al que intentas acceder tiene un espacio en el nombre, necesitarás usar notación de corchetes.

Sin embargo, también puedes utilizar la notación de corchetes en las propiedades de objeto sin espacios.

Aquí hay un ejemplo de cómo usar la notación de corchetes para leer la propiedad de un objeto:

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
myObj["Space Name"] sería la cadena Kirk, myObj['More Space'] sería la cadena Spock, y myObj["NoSpace"] sería la cadena USS Enterprise.

Ten en cuenta que los nombres de las propiedades con espacios deben estar entre comillas (simples o dobles).

Lee los valores de las propiedades an entree y the drink de testObj usando la notación de corchetes y asígnalos a entreeValue y drinkValue respectivamente.*/


const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  const entreeValue = testObj["an entree"];   
  const drinkValue = testObj["the drink"];   