interface Hero {
	name: string;
	age: number;
	codeName: string;
	power?: string;
}

const person: Hero = {
	name: 'Peter',
	age: 19,
	codeName: 'Spiderman'
	// power: "money",
};

/* Desestructuracion simple */
const { age, name, power = 'No tiene poder' } = person;
console.log(age, name, power);

/* Desestructuracion */
const createHero = ({ name, age, codeName, power }: Hero) => ({
	id: 123,
	name,
	age,
	codeName,
	power: power ?? 'No tiene poder'
});

console.log(createHero(person));
