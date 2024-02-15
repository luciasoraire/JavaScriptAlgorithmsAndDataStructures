/*Si tienes un arreglo multidimensional, puedes utilizar la misma lógica que aprendimos anteriormente para recorrer tanto el arreglo como cualquier sub-arreglo. Aquí hay un ejemplo:

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
Esto imprime cada sub-elemento dentro de arr uno a la vez. Ten en cuenta que para el bucle interior, estamos comprobando el .length de arr[i], ya que arr[i] es en sí mismo es un arreglo.

Modifica la función multiplyAll para que devuelva el producto de todos los números dentro de los sub-arreglos de arr.*/

function multiplyAll(arr) {
    let product = 1;
      for(let i=0; i<arr.length;i++){
        for(let j=0; j<arr[i].length;j++){
          product=product*(arr[i][j])
        }
      }
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);