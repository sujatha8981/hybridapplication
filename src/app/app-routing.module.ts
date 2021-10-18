import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  // },
  // {
  //   path: 'welcome',
  //   loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  // },
  // {
  //   path: 'innovator',
  //   loadChildren: () => import('./innovator/innovator.module').then( m => m.InnovatorPageModule)
  // },
  // {
  //   path: 'investor',
  //   loadChildren: () => import('./investor/investor.module').then( m => m.InvestorPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
    },
    {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
