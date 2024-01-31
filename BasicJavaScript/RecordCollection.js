/*Está creando una función que ayuda en el mantenimiento de una colección de álbumes musicales. La colección se organiza como un objeto que contiene múltiples álbumes que también son objetos. Cada álbum se representa en la colección con un id único como nombre de la propiedad. Dentro de cada objeto álbum, hay varias propiedades que describen información sobre el álbum. No todos los álbumes tienen información completa.

La función updateRecords toma 4 argumentos representados por los siguientes parámetros de función:

records - un objeto que contiene varios álbumes individuales
id - un número que representa un álbum específico en el objeto records
prop - una cadena que representa el nombre de la propiedad del álbum a actualizar
value - una cadena que contiene la información utilizada para actualizar la propiedad del álbum
Completa la función utilizando las reglas siguientes para modificar el objeto pasado a la función.

Tu función debe devolver siempre el objeto records completo.
Si value es una cadena vacía, elimina la propiedad prop dada del álbum.
Si prop no es tracks y value no es una cadena vacía, asigna el value a la prop de ese álbum.
Si prop es tracks y value no es una cadena vacía, agrega value al final del array de tracks existentes del álbum. Primero, si el álbum no tiene una propiedad tracks, asigne un array vacío. Luego añade el valor como el último elemento en el array de pistas del álbum.
Nota: Para las pruebas se utiliza una copia del objeto recordCollection. No debes modificar directamente el objeto recordCollection.*/

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  

  function updateRecords(records, id, prop, value) {
     if (prop != "tracks" && value != ""){
      records[id][prop] = value;
    }
  
    else if (prop === "tracks" && records[id].hasOwnProperty("tracks") == false){
      records[id].tracks = [];
      records[id].tracks.push(value);
    }
  
    else if (prop === "tracks" && value != ""){
      records[id].tracks.push(value);
    }
  
    else if (value === ""){
      delete records[id][prop];
    }
  
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');