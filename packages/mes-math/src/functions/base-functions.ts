import { SumParamsT } from "./base-functions.type";

export function sum(param: SumParamsT) {
    return param.a + param.b;
}

// Uncomment to demo
// export function sumAll(values:number[]) {
//     return values.reduce((value, acc)=> acc + value, 0)
// }

export function sub(a:number, b:number){
    return a - b;
}

export function mult(a:number, b:number){
    return a * b;
}

export function div(a:number, b:number){
    if(b===0) return NaN;
    return a / b;
}

export function abs(a:number){
    if (a < 0) return a*-1;
    return a;
}

export function power(a:number){
    return a**2;
}

