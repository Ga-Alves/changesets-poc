import { GreetingsParamT } from "./greetings.type";

export function greetings(param: GreetingsParamT) {
    console.log('Hello ' + param.name + " " + param.lastName);
}

export function saldacao(param: GreetingsParamT) {
    console.log('Ola ' + param.name + " " + param.lastName);
}