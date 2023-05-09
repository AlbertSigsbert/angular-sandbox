import { Component } from "@angular/core";

@Component({
   selector:'app-directives-practice',
   templateUrl:'./directives-practice.component.html'
})
export class DirectivePracticeComponent{
 showDetails: boolean = false;
 btnClicksCount = 0;
 btnCountArr: number[] = [];

  handleClick(){
    
     this.btnClicksCount++;
     this.btnCountArr.push(this.btnClicksCount);

     this.showDetails = !this.showDetails;
 }

}