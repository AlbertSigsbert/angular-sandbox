import {Component} from '@angular/core';

@Component({
    selector:'app-data-binding-practice',
    templateUrl:'./data-binding-practice.component.html'
})

export class DataBindingPracticeComponent{
   userName:string = '';

   resetUserName(){
    this.userName = '';
   }
}