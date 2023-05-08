import { Component } from '@angular/core';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CAPInfo';

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
