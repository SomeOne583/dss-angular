import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface User {
	name: string;
	time1: number;
	time2: number;
}

const users: User[] = [
	{ name: 'Nombre 1', time1: 121, time2: 40 },
	{ name: 'Nombre 2', time1: 123, time2: 38 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 },
	{ name: 'Nombre 3', time1: 99, time2: 22 }
];

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'time1', 'time2'];
  dataSource = new MatTableDataSource(users);
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;

	timeToSeconds(t) {
		/* if (t%60 < 10) {
			return Math.floor(t/60) + ':0' + t%60;
		} else {
			return Math.floor(t/60) + ':' + t%60;
		} */

	       return (t%60 < 10) ? Math.floor(t/60) + ':0' + t%60 : Math.floor(t/60) + ':' + t%60;
	}

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
}
