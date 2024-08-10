import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  ngOnInit(): void {
    setTimeout(() => {
      // this.open();
    }, 3000);
  }
  open() {
    const contact = document.getElementById('contact');
    const contactIcon = document.getElementById('contactIcon');
    if (contact) {
      if (contact.classList.contains('close')) {
        contact.classList.replace('close', 'open');
        contactIcon?.classList.replace(
          'bi-telephone-fill',
          'bi-telephone-forward-fill'
        );
      } else {
        contact.classList.replace('open', 'close');
        contactIcon?.classList.replace(
          'bi-telephone-forward-fill',
          'bi-telephone-fill'
        );
      }
    }
  }
}
