import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public width: number = window.innerWidth;

  constructor() {
  }
  
  onResize(event: any) {
    this.width = event.target.innerWidth;
  }
}
