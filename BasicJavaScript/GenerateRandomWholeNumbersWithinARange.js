/*Puedes generar un número entero aleatorio en el rango de cero a un número determinado. También puedes elegir un número inferior diferente para este rango.

Llamarás a tu número mínimo min y a tu número máximo max.

Esta fórmula da un número entero aleatorio en el rango desde min hasta max. Tómate un momento para leerla e intenta entender lo que este código está haciendo:

Math.floor(Math.random() * (max - min + 1)) + min
Crea una función llamada randomRange que tenga un rango myMin y myMax y devuelva un número entero aleatorio mayor o igual a myMin, y es menor o igual a myMax.*/

function randomRange(myMin, myMax) {
    return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
  }