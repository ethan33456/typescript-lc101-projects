import { Payload } from "./Payload";

export class Cargo implements Payload {
    massKg: number;
    material: string;
    constructor(x: number, y: string){
        this.massKg = x;
        this.material = y;
    }
}