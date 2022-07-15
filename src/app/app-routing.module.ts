import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';


const routes: Routes = [
  { path: 'home-component' , component:HomeComponent },
  { path: 'services-component' , component:ServicesComponent },
  { path: 'contact-component', component:ContactComponent },
  { path: 'about-component', component:AboutComponent },
  { path: '' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
