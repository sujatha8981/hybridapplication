import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { LoginPage } from 'src/app/pages/login/login.page';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {}

  async navigateToLoginPage() {
    // this.router.navigate(['login']);
    const modal = await this.modalCtrl.create({
          component: LoginPage,
          animated: true,
          mode: 'ios',
          backdropDismiss: false,
          cssClass: 'login-modal',
        })
    
        return await modal.present();
    }
}
