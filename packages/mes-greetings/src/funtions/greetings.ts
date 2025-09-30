import { GreetingsParamT } from "./greetings.type";

export function greetings(param: GreetingsParamT) {
    console.log('Hello ' + param.name + " " + param.lastName);
}