import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'authenticating-consumer',
  templateUrl: './authenticating-consumer.component.html',
  styleUrls: ['./authenticating-consumer.component.css']
})
export class AuthenticatingConsumerComponent implements OnInit {

  private stepper: Stepper;

  next() {
    this.stepper.next();
  }
  prev() {
    this.stepper.previous();
  }

  onSubmit() {
    return false;
  }

  startOver():void{
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: true,
      animation: true
    })
  }

}
