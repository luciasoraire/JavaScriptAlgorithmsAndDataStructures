/*La desestructuración te permite asignar un nuevo nombre de variable al extraer valores. Puedes hacer esto al poner el nuevo nombre después de dos puntos al asignar el valor.

Usando el mismo objeto del ejemplo anterior:

const user = { name: 'John Doe', age: 34 };
Así es como puedes dar nuevos nombres de variables en la asignación:

const { name: userName, age: userAge } = user;
Puedes leerlo como "obtén el valor de user.name y asígnalo a una nueva variable llamada userName" y así sucesivamente. El valor de userName sería la cadena John Doe, y el valor de userAge sería el número 34.

Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables highToday y highTomorrow con los valores de today y tomorrow del objeto HIGH_TEMPERATURES.*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
  