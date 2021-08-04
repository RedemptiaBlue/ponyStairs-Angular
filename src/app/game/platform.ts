import { GameObject } from "./gameObject"
export class Platform extends GameObject {
    item: string;

    constructor(x, y, width, height, image, item) {
        super(x, y, width, height, image);
        this.item = item;
    }
}