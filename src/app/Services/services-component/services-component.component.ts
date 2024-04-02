import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-component',
  templateUrl: './services-component.component.html',
  styleUrls: ['./services-component.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  selectedService?:Services;
  showServicesofHTTPGet: boolean = false;
  showServicesofHTTPPost: boolean = false;
   angularServices: Services[] = [
     {
     name:  'HTTPGet',
     },
     {
      name:  'HTTPPost',
      }
     ] 
     viewServicesofHTTPGet() {
       this.showServicesofHTTPGet =true
     }
     viewServicesofHTTPPost() {
      this.showServicesofHTTPPost =true
    }
     onselected(service:Services):void{
      this.selectedService=service
    }
   goBack(){
     this.router.navigate(['/']);
   }
 }
 export class Services{
   name: string ="";
 }


