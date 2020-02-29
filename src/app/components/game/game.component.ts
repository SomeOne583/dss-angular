import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
	maze = {
		size: 17,
		maze: [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,1,0,1,0,1,0,1,0,1,0,0,2,2],[1,1,1,2,1,0,1,1,0,0,1,0,1,1,1,2,1],[1,0,0,2,1,0,0,0,1,0,1,0,0,0,1,2,1],[1,1,0,2,1,1,0,1,1,1,0,1,1,1,1,2,1],[1,2,2,2,1,0,0,0,1,0,0,0,0,0,0,2,1],[1,2,1,0,0,0,1,0,1,1,1,0,1,0,1,2,1],[1,2,0,0,1,2,2,2,1,2,2,2,2,0,2,2,1],[1,2,2,1,1,2,1,2,1,2,1,1,2,2,2,1,1],[1,0,2,2,2,2,1,2,2,2,1,0,1,0,0,0,1],[1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1],[1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1],[1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1],[1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1],[1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1],[1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
	};

	p = 15;
	cx;
	cy;

	@ViewChild('maze_canvas', { static: true })
	canvas: ElementRef<HTMLCanvasElement>;

	@ViewChild('maze2_canvas', { static: true })
	canvas2: ElementRef<HTMLCanvasElement>;

	private ctx: CanvasRenderingContext2D;

	ngOnInit() {
	}

	draw(mode) {
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
				this.ctx.fillRect(this.cx * this.p, this.cy * this.p, this.p, this.p);
				this.cx++;
			});
			this.cy++;
			this.cx = 0;
		});
	}

	s;
	i;

	reset() {
		this.s = 0;
	}

	timer(mode) {
		this.i = setInterval(() => {
			this.s++;
		}, 1000);
		return (this.s%60 < 10) ? Math.floor(this.s/60) + ':0' + this.s%60 : Math.floor(this.s/60) + ':' + this.s%60;
	}
}
