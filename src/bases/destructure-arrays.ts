const saiya = ["Goku", "Vegeta", "Trunks", "Goten"];

export const [, v, t, , g2 = "Gogeta"] = saiya;

const saiyanArrays = () => {
  return [123, "ABC"] as const;
};

export const [number, latter] = saiyanArrays();

// console.log(v, t, g2);
// console.log(number * 2, latter.toLowerCase());
