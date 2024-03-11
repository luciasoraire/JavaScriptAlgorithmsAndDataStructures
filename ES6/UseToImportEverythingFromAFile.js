/*Supongamos que tienes un archivo y deseas importar todo su contenido en el archivo actual. Esto puede hacerse con la sintaxis import * as. Este es un ejemplo donde los contenidos de un archivo llamado math_functions.js son importados a un archivo dentro del mismo directorio:

import * as myMathModule from "./math_functions.js";
La anterior declaración import, crea un objeto llamado myMathModule. Esto es, sólo el nombre de una variable, puedes nombrarlo de cualquier manera. El objeto contiene todas las exportaciones de math_functions.js, así puedes acceder a las funciones, como haces con cualquier propiedad del objeto. A continuación puedes usar las funciones importadas add y subtract:

myMathModule.add(2,3);
myMathModule.subtract(5,3);
El código actual, requiere los contenidos del archivo: string_functions.js, ubicado en el mismo directorio que el archivo actual. Usa la sintaxis import * as, para importar todo del archivo, en un objeto llamado stringFunctions.*/


import * as stringFunctions from "./string_functions.js"

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");