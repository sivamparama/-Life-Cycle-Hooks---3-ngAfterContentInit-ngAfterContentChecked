import { Component, OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit, ViewChild,AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
  
  @ViewChild(FieldComponent,{static:false})viewChild:FieldComponent;
  constructor() { }

  ngOnInit() {
    console.log("parent ngOnInit",this.viewChild);
  }
  ngOnDestroy(){
    console.log("parent ngOnDestroy");
  }
  ngOnChanges(){
    console.log("parent ngOnChanges");
  }
  ngDoCheck(){
    console.log("parent ngDoCheck");
  }
  ngAfterViewInit(){
    console.log("parent ngAfterViewInit");

  }
  ngAfterViewChecked(){
    console.log("parent ngAfterViewInit");
  }
  ngAfterContentInit(){
    console.log("parent ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("parent ngAfterContentChecked");
  }

}