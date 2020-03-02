import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private deviceDetectorService: DeviceDetectorService) {}
  isDesktop = this.deviceDetectorService.isDesktop();
	ngOnInit() {}
}
