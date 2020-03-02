import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isDesktop: boolean;
  
  constructor(private deviceDetectorService: DeviceDetectorService) {
    this.isDesktop = this.deviceDetectorService.isDesktop();
    console.log(this.isDesktop);
  }
	ngOnInit() {}
}
