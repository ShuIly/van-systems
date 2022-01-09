import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mobile-top-bar',
  templateUrl: './mobile-top-bar.component.html',
  styleUrls: ['./mobile-top-bar.component.scss']
})
export class MobileTopBarComponent implements AfterViewInit {

  private input: HTMLInputElement;

  constructor(private router: Router) {

  }

  ngAfterViewInit() {
    this.input = document.getElementById('mobile-input') as HTMLInputElement;
  }
  
  scrollTo(element: string) {
    this.input.checked = false;

    let el: HTMLElement | null = null;
    switch (element) {
      case 'contacts':
        el = document.querySelector('.van-contact-container');
        break;
      case 'services':
        el = document.querySelectorAll('.van-services-title-top-container')[0] as HTMLElement;
        break;
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
