interface Hero {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

export const person: Hero = {
  name: "Petter",
  age: 19,
  codeName: "Spiderman",
  //   power: "money",
};

// console.log(person.name)
// console.log({name: person.name, age: person.age,})

// const { age, name, power = 'No tiene poder' } = person
// console.log({age,name, power})

interface createHeroArg {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

export const createHero = ({ name, age, codeName, power }: createHeroArg) => ({
  id: 2,
  name: name,
  age: age,
  codeName: codeName,
  power: power ?? "No tiene pooder",
});

// console.log(createHero(person));
