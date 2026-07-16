import heros, { type Owner } from '../data/heros';

export const getHeroById = (id: number) => {
	return heros.find((h) => h.id === id);
};

export const getOwner = (owner: Owner) => {
	return heros.filter((h) => h.owner === owner) ?? [];
};

console.log(getHeroById(100));
console.log(getOwner('DC'));
