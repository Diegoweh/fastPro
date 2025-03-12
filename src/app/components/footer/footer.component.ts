import { Component, TemplateRef, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  private modalService = inject(NgbModal);

  validateEmail(content: TemplateRef<any>) {
    const emailInput = document.getElementById("newsletter1") as HTMLInputElement;
    const email = emailInput.value.trim();
    
    if (email === "" || !emailInput.checkValidity()) {
      alert("Please enter a valid email address.");
      return;
    }

    // Abre el modal si el email es válido
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
