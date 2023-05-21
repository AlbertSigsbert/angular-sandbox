import {Directive, OnInit, Inject, ElementRef } from "@angular/core";

@Directive({
   selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    constructor(@Inject(ElementRef) private elementRef: ElementRef){}

    ngOnInit(): void {
    if(this.elementRef){
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
   }
}