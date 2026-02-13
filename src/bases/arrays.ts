const numberArray = [1, 2, 3, 4, 5];
numberArray.push(6);

const numberArrayDos: (string | number)[] = [...numberArray];
numberArrayDos.push(7);
numberArrayDos.push("7");

// console.log({ numberArray, numberArrayDos });
