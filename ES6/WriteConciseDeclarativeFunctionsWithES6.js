/*Al definir funciones dentro de objetos en ES5, tenemos que utilizar la palabra clave function de la siguiente manera:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
Con ES6, puedes eliminar la palabra clave function y los dos puntos al definir funciones en objetos. Aquí hay un ejemplo de esta sintaxis:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
Refactoriza la función setGear dentro del objeto bicycle para que utilice la sintaxis abreviada descrita arriba.*/


const bicycle = {
    gear: 2,
    setGear(newGear) {
      return this.gear = newGear;
    }
  };
  
  bicycle.setGear(3);
  console.log(bicycle.gear);