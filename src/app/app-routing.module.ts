import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './Home/home-component/home-component.component';
import { ComponentsComponent } from './Components/components-component/components-component.component';
import { DirectiveComponent } from './Directives/directive-component/directive-component.component';
import { ServicesComponent } from './Services/services-component/services-component.component';
import { HeaderComponent } from './Header/header-component/header-component.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'directives/:id', component: DirectiveComponent },
  { path: 'directives', component: DirectiveComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
