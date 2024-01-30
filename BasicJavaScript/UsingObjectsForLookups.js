/*Los objetos pueden ser considerados como un almacenamiento clave/valor, como un diccionario. Si tienes datos tabulares, puedes utilizar un objeto para hacer una búsqueda de valores en lugar de una declaración switch o encadenar if/else. Esto es de mucha utilidad cuando se sabe que los datos de entrada están limitados a un cierto rango.

Este es un ejemplo de un objeto de artículo:

const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
articleAuthor es la cadena Kaashan Hussain, articleLink es la cadena https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/, y valueLookup es la cadena How to create objects in JavaScript.

Convierte la declaración switch en un objeto llamado lookup. Úsalo para buscar val y asignar la cadena asociada a la variable result.*/


function phoneticLookup(val) {
    let result = "";
  

    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
      "": undefined
    }
   result=lookup[val];

    return result;
  }
  
  phoneticLookup("charlie");