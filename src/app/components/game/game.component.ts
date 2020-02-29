import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GeneratorService } from '../../services/generator.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
	// maze = {
	// 	size: 17,
	// 	maze: [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,1,0,1,0,1,0,1,0,1,0,0,2,2],[1,1,1,2,1,0,1,1,0,0,1,0,1,1,1,2,1],[1,0,0,2,1,0,0,0,1,0,1,0,0,0,1,2,1],[1,1,0,2,1,1,0,1,1,1,0,1,1,1,1,2,1],[1,2,2,2,1,0,0,0,1,0,0,0,0,0,0,2,1],[1,2,1,0,0,0,1,0,1,1,1,0,1,0,1,2,1],[1,2,0,0,1,2,2,2,1,2,2,2,2,0,2,2,1],[1,2,2,1,1,2,1,2,1,2,1,1,2,2,2,1,1],[1,0,2,2,2,2,1,2,2,2,1,0,1,0,0,0,1],[1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1],[1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1],[1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1],[1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1],[1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1],[1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
	// };
	genMaze() {
		this.generatorService.getMaze()
		.subscribe(
			(data) => {
				// console.log(data['size']);
				this.maze = {
					size: data['size'],
					maze: data['maze']
				}
			}
		);
	}

	maze;
	// private generatorService: GeneratorService;
	constructor(private generatorService: GeneratorService) {
		this.genMaze();
	}


	m = 10;
	cx: number;
	cy: number;

	@ViewChild('maze_canvas', { static: true })
	canvas: ElementRef<HTMLCanvasElement>;

	@ViewChild('maze2_canvas', { static: true })
	canvas2: ElementRef<HTMLCanvasElement>;

	private ctx: CanvasRenderingContext2D;

	ngOnInit() {
	}

	draw(mode: number) {
		if (mode === 1) {
			this.ctx = this.canvas.nativeElement.getContext('2d');
		} else if (mode === 2) {
			this.ctx = this.canvas2.nativeElement.getContext('2d');
		}
		this.cx = this.cy = 0;
		this.maze.maze.forEach(row => {
			row.forEach(tile => {
				if (tile === 0) {
					this.ctx.fillStyle = 'white';
				} else if (tile === 1) {
					this.ctx.fillStyle = 'black';
				} else if (tile === 2) {
					if (mode === 1) {
						this.ctx.fillStyle = 'white';
					} else if (mode === 2) {
						this.ctx.fillStyle = 'blue';
					}
				}
				this.ctx.fillRect(this.cx * this.m, this.cy * this.m, this.m, this.m);
				this.cx++;
			});
			this.cy++;
			this.cx = 0;
		});
	}

	initDate: number;
	currDate: number;
	time1: number;
	time2: number;

	reset(mode: number) {
		if (mode === 0) {
			this.initDate = Date.now();
		} else if (mode === 1) {
			this.currDate = Date.now()
			this.time1 = Math.floor((this.currDate - this.initDate)/1000);
			this.initDate = Date.now();
		} else if (mode === 2) {
			this.currDate = Date.now()
			this.time2 = Math.floor((this.currDate - this.initDate)/1000);
		}
	}
}