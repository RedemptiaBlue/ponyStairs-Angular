import { GameObject } from "./gameObject"
export class Platform extends GameObject {
    item?: string;

    constructor(x: number, y: number, width: number, height: number, image: string, item?: string) {
        super(x, y, width, height, image);
        this.item = item;
    }
}