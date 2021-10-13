import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private roter: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async home() {
    this.roter.navigateByUrl('/home');
   }
   async dismiss() {
    await this.modalCtrl.dismiss();
  }
   
  // async home() {
  //   const modal = await this.modalCtrl.create({
  //     component: HomePage,
  //     animated: true,
  //     mode: 'ios',
  //     backdropDismiss: true,
  //     cssClass: 'home-modal',
  //   })

  //   return await modal.present();
  // }
}
