import type { Hero } from '../data/heros';
import { getHeroById } from './07-imp-exp';

console.log('Inicio');

/* Promesa */
new Promise((resolve, reject) => {
	console.log('Promises');
	setTimeout(() => {
		resolve('Resultado exitoso');
		reject('Error');
	}, 1000);
})
	.then((msg) => console.log(msg))
	.catch((error) => console.warn(error));

console.log('Fin');

/* Definir una promesa dentro de una funcion */
const getHeroByIdAsync = (id: number): Promise<Hero> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const hero = getHeroById(id);
			/* Operador ternario (? :) if...else. */
			hero ? resolve(hero) : reject(`Heroe no encontrado #${id}`);
		}, 1000);
	});
};

getHeroByIdAsync(2)
	.then((hero) => console.log(`El nombre del hero es`, hero.name))
	.catch(alert);
