/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

Haz varios ejemplos y compruébalos. */

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

let characterCount = 0;

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text){
        return array.indexOf(text);
      }
    } return "That caracter isn't in the array";
}


console.log(findArrayIndex(mainCharacters, "Han Solo"));
console.log(findArrayIndex(mainCharacters, "Anakin"));
console.log(findArrayIndex(mainCharacters, "Yoda"));
console.log(findArrayIndex(mainCharacters, "Darth Vader"));

/* Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */

function removeItem (array, text) {
    
    let index = findArrayIndex(array, text);
    let newArray = array.slice();
    
    if (typeof index === 'number') {
      newArray.splice(index, 1);
    } else {
      return "That character isn't in the array";
    }
    return newArray;
}

console.log(mainCharacters);
console.log(removeItem(mainCharacters, "Han Solo"));
console.log(removeItem(mainCharacters, "Anakin"));
console.log(removeItem(mainCharacters, "Yoda"));
console.log(removeItem(mainCharacters, "Darth Vader"));