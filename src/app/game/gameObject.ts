export class gameObject {
    image: string;
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }
}