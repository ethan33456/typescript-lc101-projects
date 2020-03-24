import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(a: string, b: number, c: Cargo[], d: Astronaut[]) {
        this.name = a;
        this.totalCapacityKg = b;
        this.cargoItems = c;
        this.astronauts = d;
    }
    sumMass( items: Payload[] ): number {
        //Returns the sum of all items using each item's massKg property
        let totalMass: number = 0;
        for (let item in items){
            totalMass += this.astronauts[item].massKg;
        }
        return totalMass;
    }
    currentMassKg(): number {
        return 6;
    }
    canAdd(item: Payload): boolean {
        return true;
    }
    addCargo(cargo: Cargo): boolean {
        return true;
    }
    addAstronaut(astronaut: Astronaut): boolean {
        return false;
    }
}