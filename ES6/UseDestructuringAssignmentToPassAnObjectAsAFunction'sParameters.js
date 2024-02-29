/*En algunos casos, se puede desestructurar el objeto en un propio argumento de función.

Considera el siguiente código:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
Esto desestructura efectivamente el objeto enviado a la función. Esto también se puede hacer en el lugar:

const profileUpdate = ({ name, age, nationality, location }) => {

}
Cuando profileData es pasado a la función anterior, los valores son desestructurados desde el parámetro de función para su uso dentro de la función.

Utiliza la sintaxis de desestructuración dentro del argumento de la función half para enviar solo max y min dentro de la función.*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  const half = ({ max, min }) => (max + min) / 2.0;