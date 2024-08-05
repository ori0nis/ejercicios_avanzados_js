/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante. */

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  function swap(array, index1, index2) {

    let arrayCopy = array.slice(); // hago esto porque me da rabia que se modifique el array original y no quede bien
    let duringSwap = arrayCopy[index1];
    arrayCopy[index1] = arrayCopy[index2];
    arrayCopy[index2] = duringSwap;
    return arrayCopy;
    }
      
  
  console.log(swap(fantasticFour, 0, 3));
  console.log(swap(fantasticFour, 2, 1));