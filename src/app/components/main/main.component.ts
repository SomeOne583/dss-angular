import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isDesktop: boolean;
  indx: number;
  
  constructor(private deviceDetectorService: DeviceDetectorService) {
    this.isDesktop = this.deviceDetectorService.isDesktop();
    this.isDesktop === true ? this.indx = 1 : this.indx = 0;
  }
	ngOnInit() {}
}
