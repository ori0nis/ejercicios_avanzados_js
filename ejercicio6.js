/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante. */

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  function swap(array, text1, text2) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text1) {
            return array.indexOf(text1);
        } else if (array[i] === text2) {
            return array.indexOf(text2);
        }
    }
   /* for (let j = 0; j < array.length; j++) {
        if (array[j] === text2) {
            return array.indexOf(text2);
        }
    }*/
  }

  console.log(swap(fantasticFour, "La antorcha humana", "La cosa"));

  // intercambiar valores significa cambiar su indice en el array
  // de array[2] a array[3] -> de array[i] a array[j]?
  // h