import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./components/about/about.component";
import { WhyComponent } from "./components/why/why.component";
import { SelectProductComponent } from "./components/select-product/select-product.component";
import { IndustriesComponent } from "./components/industries/industries.component";
import { ServicezComponent } from "./components/servicez/services.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AboutComponent, WhyComponent, SelectProductComponent, IndustriesComponent, ServicezComponent, ClientsComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastPro';
}
