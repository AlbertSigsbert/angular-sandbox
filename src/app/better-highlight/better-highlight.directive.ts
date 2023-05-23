import { Directive, ElementRef,HostBinding,HostListener,Input,OnInit,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';


  @HostBinding('style.backgroundColor') bgColor: string = this.defaultColor;


  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
     this.bgColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(){
       this.bgColor = this.highlightColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(){
       this.bgColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

}
