import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SignupPageModule } from './signup.module';

import { SignupPage } from './signup.page';

describe('SignupPage', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        SignupPageModule

      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;

    // fixture.detectChanges();
  }));

  it('should create signup form on page init', () => {
    fixture.detectChanges();

    expect(component.signupForm).not.toBeUndefined();
  });

it('should go to home page on signup', () => {
  spyOn(router, 'navigate');

  component.home();

  expect(router.navigate).toHaveBeenCalledWith(['home']);
})

});
