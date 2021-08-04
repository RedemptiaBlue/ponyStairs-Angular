import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {Platform} from "./platform"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  platforms: Platform[];
  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  
  private ctx: CanvasRenderingContext2D | null;

  constructor() {
    this.platforms = [];
  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.setPlatforms();
  }

  setPlatforms() {
    const img = "/assets/platform.png"
    this.platforms.push(
      new Platform(540, 650, 120, 120, img),
      new Platform(440, 550, 120, 120, img)
    )
    const options = [-100, 100]
    while (this.platforms.length < 9) {
      const len = this.platforms.length
      const rand: number = Math.floor(Math.random() * 2);
      this.platforms.push(
        new Platform(
          this.platforms[len - 1].x + options[rand],
          this.platforms[len - 1].y - 100,
          120, 120, img
        )
      )
    }
  }

}
