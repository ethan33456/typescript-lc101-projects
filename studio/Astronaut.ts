import { Payload } from "./Payload";

export class Astronaut implements Payload {
    massKg: number;
    name: string;
    constructor(x: number, y: string){
        this.massKg = x;
        this.name = y;
    }
}