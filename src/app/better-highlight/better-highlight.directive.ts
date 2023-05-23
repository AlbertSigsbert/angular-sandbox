import { Directive, ElementRef,HostBinding,HostListener,OnInit,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';


  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(){
       this.bgColor = 'blue';
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(){
       this.bgColor = 'transparent';
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

}
