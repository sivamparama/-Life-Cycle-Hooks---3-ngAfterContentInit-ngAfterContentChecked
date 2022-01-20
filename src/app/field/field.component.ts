import { Component, OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,Input, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
  name="Angular";
   @Input()type;

  constructor() { }
  value:any;
  ngOnInit() {
    console.log(this.type+" ngOnInit");
  }
  ngOnDestroy(){
    console.log(this.type+ "ngOnDestroy");
  }
  ngOnChanges(){
    console.log(this.type+ "ngOnChanges");
  }
  ngDoCheck(){
    console.log(this.type+ "ngDoCheck");
  }
  ngAfterViewInit(){
    console.log(this.type+ "ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log(this.type+ "ngAfterViewChecked");
  }
  ngAfterContentInit(){
    console.log(this.type+"ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log(this.type+"ngAfterContentChecked");
  }

}