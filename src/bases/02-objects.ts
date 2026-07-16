const person = {
	lastName: 'Castro',
	firtName: 'Styven',
	age: 22,
	address: {
		city: 'New York',
		post: 110441
	}
}; // as const

/* as const
Te permite restringuir el valor de las variables definidas en el objeto, es decir, no se puede modificar su valor */

/* Redefinir valor */
person.age = 23;

/* Opcion 1: Clonar objeto
Resulta un poco mas complejo desestructurar con esta opcion cuando se utilizan objetos y arrelos anidados. */
const person2 = { ...person, address: { ...person.address } };
person2.firtName = 'Tony';
person2.address.city = 'New Jersey';

/* La desestructuración es una sintaxis que permite extraer valores de arreglos u objetos y asignarlos a variables independientes de manera rápida, limpia y en una sola línea de código */

/* Opcion 2: Forma nueva de clonar objetos */
const person3 = structuredClone(person);
person3.lastName = 'Stark';

console.log({ person }, { person2 }, { person3 });
