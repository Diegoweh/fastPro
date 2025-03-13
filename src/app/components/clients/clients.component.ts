import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-clients',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  successMessage: string | null = null;

  onSubmit(event: Event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    this.successMessage = 'Thank you for subscribing!';
    
    // Oculta el mensaje después de 3 segundos
    setTimeout(() => {
      this.successMessage = null;
    }, 3000);
    
    // Opcional: puedes limpiar los campos del formulario
    (event.target as HTMLFormElement).reset();
  }

}
