/* Funcion tradicional */
function person01(name: string) {
	return `Hola ${name}`;
}
person01('Tonny');

/* Funcion de flecha */
const person02 = (name: string) => {
	return `Hola ${name}`;
};
person02('Peter');

/* Metodo simplificado */
const person03 = (name: string) => `Hola ${name}`;
person03('Steven');

/* Metodo simplificado para retornar un objeto */
const getUser = (uid: string) => ({
	uid, // Simplificado
	user: 'user001'
});
getUser('XYZ-123');

const heroes = [
	{
		id: 1,
		name: 'Batman'
	},
	{
		id: 2,
		name: 'Superman',
		power: 'Super fuerza'
	}
];

export const hero = heroes.find((h) => h.id === 1);

// console.log(hero?.power?.toUpperCase());
