import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePageTR } from '../home-tr/home-tr';

@NgModule({
  declarations: [
    HomePageTR,
  ],
  imports: [
    IonicPageModule.forChild(HomePageTR),
  ],
  exports: [
    HomePageTR
  ]
})
export class HomePageTRModule {}
