import { GeeringParamT } from "./greetings.type";

export function greetings(param: GeeringParamT) {
    console.log('Hello ' + param.name + " " + param.lastName);

}