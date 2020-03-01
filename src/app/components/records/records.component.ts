import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../../services/users.service';

export interface User {
	name: string;
	time1: number;
	time2: number;
}

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
	
	displayedColumns: string[] = ['name', 'time1', 'time2'];
	
	@ViewChild(MatSort, {static: true}) sort: MatSort;
	
	timeToSeconds(t: number) {
		return (t%60 < 10) ? Math.floor(t/60) + ':0' + t%60 : Math.floor(t/60) + ':' + t%60;
	}
	users: any;
	dataSource: MatTableDataSource<unknown>;
	
	genUsers() {
		this.usersService.getUsers()
		.subscribe(
			(data) => {
				this.users = data;
				this.dataSource = new MatTableDataSource(this.users);
				this.dataSource.sort = this.sort;
			}
		);
	}
		
	constructor(private usersService: UsersService) {
		this.genUsers();
	}
	  
	ngOnInit(): void {
  	}
}