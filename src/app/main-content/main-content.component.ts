import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'van-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

  @ViewChild('contactsContainer') contactsContainer: ElementRef;
  
  constructor() {
    
  }

  scrollToContacts() {
    (this.contactsContainer.nativeElement as HTMLElement).scrollIntoView({
      behavior: 'smooth'
    });
  }
}
