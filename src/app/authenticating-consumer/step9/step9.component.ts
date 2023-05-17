import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.css']
})
export class Step9Component implements OnInit {

  constructor() { }
  showStep11:boolean=false;
  showStep10:boolean=false;
  showStep9:boolean=true;
  ngOnInit(): void {
  }
  click9():void{
    this.showStep10=false;
    this.showStep9=true;
    this.showStep11=false;
  }

  click10():void{
    this.showStep11=false;
    this.showStep9=false;
    this.showStep10=true;
  }
  click11():void{
    this.showStep11=true;
    this.showStep9=false;
    this.showStep10=false;
  }
}
