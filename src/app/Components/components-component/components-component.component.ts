import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components-component',
  templateUrl: './components-component.component.html',
  styleUrls: ['./components-component.component.css']
})
export class ComponentsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  selectedComponent?: Components;
  showServicesComponent: boolean = false;
  showDirectivesComponent: boolean = false;
  angularComponents: Components[] = [
    {
      name: 'ServicesComponent',
    },
    {
      name: 'DirectivesComponent',
    }
  ]
  viewServicesComponent() {
    this.showServicesComponent = true
  }
  viewDirectivesComponent() {
    this.showDirectivesComponent = true
  }
  onselected(component: Components): void {
    this.selectedComponent = component
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
export class Components {
  name: string = "";
}
