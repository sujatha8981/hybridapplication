import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SignupPageForm } from './form/signup.page.form';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  [x: string]: any;
  //modalCtrl: any;
  signupPageForm = SignupPageForm;

  constructor(private roter: Router, private modalCtrl: ModalController, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.createForm;
  }

  async home() {
   this.roter.navigateByUrl('/home');
  }

  private createForm(){
    this.signupForm = new SignupPageForm(this.formBuilder);
  }
}
