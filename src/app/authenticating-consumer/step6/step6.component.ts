import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css']
})
export class Step6Component implements OnInit {

  constructor() { }
  showStep7:boolean=false;
  showStep8:boolean=false;
  showStep6:boolean=true;
  ngOnInit(): void {
  }
  click7():void{
    this.showStep6=false;
    this.showStep7=true;
    this.showStep8=false;
  }

  click8():void{
    this.showStep6=false;
    this.showStep7=false;
    this.showStep8=true;
  }
  click6():void{
    this.showStep6=true;
    this.showStep8=false;
    this.showStep7=false;
  }
}
