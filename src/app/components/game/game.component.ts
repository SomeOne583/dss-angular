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

	maze: { maze: any; size: number; };
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
	
	drawing = false;
	c: ElementRef<HTMLCanvasElement>;
	prevX: number;
	prevY: number;

	drawLine(x: number, y: number, event: string) {
		if (event === 'move') {
			if (this.drawing === true) {
				this.ctx.beginPath();
				this.ctx.moveTo(this.prevX, this.prevY);
				this.ctx.fillRect(x, y, 8, 4);
				this.prevX = x;
				this.prevY = y;
			}
		} else if (event === 'down') {
			this.drawing = true;
			this.prevX = x;
			this.prevY = y;
		} else if (event === 'up') {
			this.drawing = false;
		}
	}
	
	draw(mode: number) {
		// if (mode === 1) {
		// 	this.ctx = this.canvas.nativeElement.getContext('2d');
		// } else if (mode === 2) {
		// 	this.ctx = this.canvas2.nativeElement.getContext('2d');
		// }
		if (mode === 1) {
			this.c = this.canvas;
		} else if (mode === 2) {
			this.c = this.canvas2;
		}
		this.ctx = this.c.nativeElement.getContext('2d');
		this.cx = this.cy = 0;
		this.maze.maze.forEach((row: any[]) => {
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
				this.ctx.fillStyle = "#00FF00";
				this.cx++;
			});
			this.cy++;
			this.cx = 0;
		});
		this.c.nativeElement.addEventListener('mousemove', (e) => {
			this.drawLine((e.clientX - this.c.nativeElement.offsetLeft), (e.clientY - this.c.nativeElement.offsetTop * 2.3), 'move');
		});
		this.c.nativeElement.addEventListener('mousedown', (e) => {
			this.drawLine((e.clientX - this.c.nativeElement.offsetLeft), (e.clientY - this.c.nativeElement.offsetTop * 2.3), 'down');
		});
		this.c.nativeElement.addEventListener('mouseup', (e) => {
			this.drawLine((e.clientX - this.c.nativeElement.offsetLeft), (e.clientY - this.c.nativeElement.offsetTop * 2.3), 'up');
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
			/* Aquí se hará el POST para guardar los resultados */
		}
	}

	timeToSeconds(t: number) {
		return (t%60 < 10) ? Math.floor(t/60) + ':0' + t%60 : Math.floor(t/60) + ':' + t%60;
	}
}