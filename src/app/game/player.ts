import {GameObject} from "./gameObject";

class Player extends GameObject {
    direction: number;
    score: number;
    highScore: number;
    coins: number;
    hearts: number;
    justRevived: boolean;
    lossImage: string;
    jumpImage: string;

    constructor(x, y, width, height, image, jumpImage, lossImage) {
        super(x, y, width, height, image);
        this.jumpImage = jumpImage;
        this.lossImage = lossImage;
        this.direction = 1;
        this.score = 0;
        this.highScore = 0;
        this.coins = 0;
        this.hearts = 0;
        this.justRevived = false;
    }
}