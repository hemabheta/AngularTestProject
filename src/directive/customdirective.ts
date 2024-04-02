import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class CustomDirective {

colors = ['red', 'blue', 'green', 'yellow'];

constructor(private readonly elementRef: ElementRef<HTMLInputElement>){
     this.changeColor();
 }
 changeColor() {
   setInterval(() => {
    this.elementRef.nativeElement.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)];
   }, 1000);
 }

}