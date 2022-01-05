import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mobile-top-bar',
  templateUrl: './mobile-top-bar.component.html',
  styleUrls: ['./mobile-top-bar.component.scss']
})
export class MobileTopBarComponent {

  constructor(private router: Router) {

  }
  
  scrollTo(element: string) {
    let el: HTMLElement | null = null;
    switch (element) {
      case 'contacts':
        el = document.querySelector('.van-contact-container');
        break;
      case 'services':
        el = document.querySelectorAll('.van-services-bottom-title')[0] as HTMLElement;
        return;
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
