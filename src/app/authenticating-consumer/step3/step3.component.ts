import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  constructor() { }
  
  showStep5:boolean=false;
  showStep4:boolean=false;
  showStep3:boolean=true;

  ngOnInit(): void {
  }

  click5():void{
    this.showStep3=false;
    this.showStep5=true;
    this.showStep4=false;
  }

  click4():void{
    this.showStep3=false;
    this.showStep5=false;
    this.showStep4=true;
  }
  click3():void{
    this.showStep3=true;
    this.showStep5=false;
    this.showStep4=false;
  }
}
