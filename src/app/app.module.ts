import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home-component/home-component.component';
import { ServicesComponent } from './Services/services-component/services-component.component';
import { DirectiveComponent } from './Directives/directive-component/directive-component.component';
import { ComponentsComponent } from './Components/components-component/components-component.component';
import { HeaderComponent } from './Header/header-component/header-component.component';
import { CustomDirective } from 'src/directive/customdirective';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    DirectiveComponent,
    ComponentsComponent,
    HeaderComponent,
    CustomDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
