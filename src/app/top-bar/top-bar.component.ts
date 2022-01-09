import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'van-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router) {

  }
  
  scrollTo(element: string) {
    let el: HTMLElement | null = null;
    switch (element) {
      case 'contacts':
        el = document.querySelector('.van-contact-container');
        break;
      case 'services':
        el = document.querySelectorAll('.van-services-title-top-container')[0] as HTMLElement;
        break;
      default:
        break;
    }

    if (!el) {
      return;
    }

    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

  goToHome() {
    if (!this.router.url.includes('home')) {
      this.router.navigate(['/home']);
    }
  }
}
