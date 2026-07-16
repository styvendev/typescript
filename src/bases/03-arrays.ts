const numberArray = [1, 2, 3, 4, 5];

/* Insertar el valor al arreglo */
numberArray.push(6);

/* Clonar arreglo
Definir el tipo de dato que soportara el arreglo */
const numberArrayDos: (string | number)[] = [...numberArray];
numberArrayDos.push(7);
numberArrayDos.push('8');

console.log({ numberArray, numberArrayDos });
