import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SelectProductComponent } from './components/select-product/select-product.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ServicezComponent } from './components/servicez/services.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { FeaturesPageComponent } from './pages/features-page/features-page.component';
import { ProspectivesPageComponent } from './pages/prospectives-page/prospectives-page.component';
import { FaqsPageComponent } from './pages/faqs-page/faqs-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bags', component: SelectProductComponent  },
  { path: 'textiles', component: IndustriesComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'services', component: ServicezComponent },
  { path: 'contact', component: ClientsComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'prospectives', component: ProspectivesPageComponent },
  { path: 'faqs', component: FaqsPageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
