import type { User } from "./models/user.model";

let user: User = {
  name: "Juan",
  lastName: "Perez",
  age: 20,
};

const saludo: string = `La persona se llama ${user.name} ${user.lastName} y tiene ${user.age} años`;
console.log("$" + saludo);
