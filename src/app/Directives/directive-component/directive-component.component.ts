import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html',
  styleUrls: ['./directive-component.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
 selectedDirective?:Directives;
 showContentNgIf: boolean = false;
 showContentNgFor: boolean = false;
  angularDirectives: Directives[] = [
    {
      id:1,
    name:  'ngIf',
    },
    {
      id:2,
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
  goBack() {
    
      let selectedId = this.selectedDirective ? this.selectedDirective.id : undefined;
      this.router.navigate(['/'], { queryParams: { id: selectedId } });
    }
    
}
export class Directives{
  id:number=1
  name: string ="";
}