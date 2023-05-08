import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatingConsumerComponent } from './authenticating-consumer.component';

describe('AuthenticatingConsumerComponent', () => {
  let component: AuthenticatingConsumerComponent;
  let fixture: ComponentFixture<AuthenticatingConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticatingConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticatingConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
