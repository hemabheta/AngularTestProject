import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html',
  styleUrls: ['./directive-component.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 selectedDirective?:Directives;
 showContentNgIf: boolean = false;
 showContentNgFor: boolean = false;
  angularDirectives: Directives[] = [
    {
    name:  'ngIf',
    },
    {
      name:   'ngFor'
    }
    ] 
    viewContentNgIf() {
      this.showContentNgIf = !this.showContentNgIf;
    }
    
    viewContentNgFor() {
      this.showContentNgFor = !this.showContentNgFor;
    }
  onselected(directve:Directives):void{
    this.selectedDirective=directve
  }
  goBack(){
    this.router.navigate(['/']);
  }
}
export class Directives{
  name: string ="";
}