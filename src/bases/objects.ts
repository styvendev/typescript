export const person = {
  lastName: "Castro",
  firtName: "Styven",
  age: 22,
  address: {
    city: "New York",
    post: 110441,
  },
}; // as const

const personDos = structuredClone(person);

personDos.firtName = "Johan";
personDos.address.city = "LA";

// console.log({ person });
// console.log({ personDos });
