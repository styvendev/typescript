import type { Hero } from "../data/heros";
import { getHeroById } from "./imp-exp";
// console.log("Inicio");

// new Promise((resolve, reject) => {
//   console.log("Promises");
//   setTimeout(() => {
//     resolve("Timepos de ejecucion 1 segundo");
//     reject("Timepos de ejecucion 1 segundo");
//   }, 1000);
// })
//   .then((msg) => console.log(msg))
//   .catch((error) => console.warn(error));

// console.log("Fin");

const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      hero ? resolve(hero) : reject(`Heroe no encontrado #${id}`);
    }, 1000);
  });
};

getHeroByIdAsync(2)
  .then((hero) => console.log(`El nombre del hero es`, hero.name))
  .catch(alert);
