import { GameObject } from "./gameObject";
export class collectible extends GameObject {
    type: string;

    constructor(x, y, width, height, image, type) {
        super(x, y, width, height, image);
        this.type = type;
    }
}