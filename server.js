import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

const name = chance.string({ pool: "elkmp" });
const age = chance.integer({ min: 2, max: 99 });
const profession = chance.string({ pool: "abcdefghi" });

console.log(name);
export const server = createServer((request, response) => {
  response.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
  );
});
