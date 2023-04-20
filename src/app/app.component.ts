import { Component } from '@angular/core';
import { HeaderHeightService } from './Services/header-height.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-website';
  constructor(public header_height: HeaderHeightService) {}
}
