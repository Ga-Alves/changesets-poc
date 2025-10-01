import { GreetingsParamT } from "./greetings.type";

export function greetings(param: GreetingsParamT) {
    console.log('Hello ' + param.name + " " + param.lastName);
}

export function greetingsForAll(names: string[]) {
    names.forEach((name) => console.log('Helllo ' + name))
}

export function saldacao(firstName: string) {
    console.log('Olá ' + firstName);
}
