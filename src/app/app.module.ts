import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step1Component } from './authenticating-consumer/step1/step1.component';
import { Step2Component } from './authenticating-consumer/step2/step2.component';
import { Step3Component } from './authenticating-consumer/step3/step3.component';
import { Step4Component } from './authenticating-consumer/step4/step4.component';
import { Step5Component } from './authenticating-consumer/step5/step5.component';
import { Step6Component } from './authenticating-consumer/step6/step6.component';
import { Step7Component } from './authenticating-consumer/step7/step7.component';
import { Step8Component } from './authenticating-consumer/step8/step8.component';
import { Step9Component } from './authenticating-consumer/step9/step9.component';
import { Step10Component } from './authenticating-consumer/step10/step10.component';
import { Step11Component } from './authenticating-consumer/step11/step11.component';
import { Step12Component } from './authenticating-consumer/step12/step12.component';
import { AuthenticatingConsumerComponent } from './authenticating-consumer/authenticating-consumer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    Step8Component,
    Step9Component,
    Step10Component,
    Step11Component,
    Step12Component,
    TopNavComponent,
    AuthenticatingConsumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbAccordionModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
