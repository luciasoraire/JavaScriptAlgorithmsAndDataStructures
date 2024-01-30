/*Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como así también arreglos anidados. De manera similar a como se accede a los objetos anidados, la notación de corchetes de arreglos puede ser encadenada para acceder a arreglos anidados.

En el siguiente ejemplo, vemos cómo se accede a un arreglo anidado:

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1] sería la cadena Fluffy, y ourPets[1].names[0] sería la cadena Spot.

Using dot and bracket notation, set the variable secondTree to the second element in the list array from the second object in the myPlants array.

*/

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];