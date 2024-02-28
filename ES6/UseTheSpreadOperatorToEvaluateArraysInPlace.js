/*ES6 introduce el operador de propagación, que nos permite expandir arreglos y otras expresiones en lugares donde se esperan múltiples parámetros o elementos.

El siguiente código ES5 usa apply() para calcular el valor máximo en un arreglo:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
maximus tendrá un valor de 89.

Tuvimos que usar Math.max.apply(null, arr) porque Math.max(arr) devuelve NaN. Math.max() espera argumentos separados por comas, pero no un arreglo. El operador de propagación hace que esta sintaxis sea más fácil de leer y mantener.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
maximus tendría un valor de 89.

...arr devuelve un arreglo desempacado. En otras palabras, esparce el arreglo. Sin embargo, el operador de propagación sólo funciona en el lugar, como en un argumento de función o en un arreglo literal. Por ejemplo:

const spreaded = [...arr];
Sin embargo, la siguiente línea de código no funcionará:

const spreaded = ...arr;
Copia todos los contenidos de arr1 en otro arreglo arr2 usando el operador de propagación.*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);