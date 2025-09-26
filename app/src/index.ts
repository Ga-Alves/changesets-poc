import { GeeringParamT, greetings } from 'mes-greetings'
import { sum } from 'mes-math';
const p: GeeringParamT = {
    name: "John",
    lastName: "Doe",
}

greetings(p)

console.log('1 + 1 = ', sum({a: 1, b: 1}));
