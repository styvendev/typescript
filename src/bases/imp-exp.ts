import heros, { type Owner } from "../data/heros";

export const getHeroById = (id: number) => {
  return heros.find((hero) => hero.id === id);
};

export const getOwner = (owner: Owner) => {
  return heros.filter((hero) => hero.owner === owner);
};

// console.log(getHeroId(1));
// console.log(getOwner("DC"));
