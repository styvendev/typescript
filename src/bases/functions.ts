// function getPerson (name:string) {
//     return `Hola ${ name }`
// }

// const getPerson = (name: string) => {
//     return `Hola ${name}`
// }

export const getPerson = (name: string) => `Hola ${name}`;
export const getUser = (id: string) => ({
  id: id,
  User: "User001",
});

// console.log(getPerson("Styven"));
// console.log(getUser("XYZ-UID"));

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
    power: "Super fuerza",
  },
];

export const hero = heroes.find((h) => h.id === 1);

// console.log(hero?.power?.toUpperCase());
