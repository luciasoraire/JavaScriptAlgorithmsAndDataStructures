/*A veces, es posible que desees almacenar datos en una estructura de datos flexible. Un objeto de JavaScript es una forma de manejar datos flexibles. Permiten combinaciones arbitrarias de cadenas, números, booleanos, arreglos, funciones, y objetos.

Este es un ejemplo de una estructura de datos compleja:

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
Esto es una arreglo que contiene un objeto en su interior. El objeto tiene varias piezas de metadatos sobre un álbum. También tiene un arreglo anidado de formats. Si desea añadir más registros de álbumes, puede hacerlo añadiendo registros a la parte superior del arreglo. Los objetos almacenan datos en una propiedad, con formato clave-valor. En el ejemplo anterior, "artist": "Daft Punk" es una propiedad que tiene como clave artist y su valor es Daft Punk.

Nota: Deberás colocar una coma después de cada objeto en el arreglo, a menos que sea el último objeto.

Añade un nuevo álbum al arreglo myMusic. Añade las cadenas artist y title, el número release_year, y un arreglo de cadenas formats.

*/

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];
  
  myMusic.push({"artist":"Lucía Soraire", "title": "certification", "release_year":2024, "formats": ["CD", "LP"]})