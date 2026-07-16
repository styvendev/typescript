const character = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

/* Desestructuracion simple */
const [, v, t, , g2 = 'Gogeta'] = character;
console.log(v, t, g2);

const saiyanArrays = () => {
	return [123, 'ABC'] as const;
};

const [number, latter] = saiyanArrays();
console.log(number * 2, latter.toLowerCase());
