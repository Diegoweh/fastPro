import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WhyComponent } from './components/why/why.component';
import { SelectProductComponent } from './components/select-product/select-product.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ServicezComponent } from './components/servicez/services.component';
import { ClientsComponent } from './components/clients/clients.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'why', component: WhyComponent },
  { path: 'select-product', component: SelectProductComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'services', component: ServicezComponent },
  { path: 'clients', component: ClientsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
