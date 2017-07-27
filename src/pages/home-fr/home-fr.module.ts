import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePageFR } from '../home-fr/home-fr';

@NgModule({
  declarations: [
    HomePageFR,
  ],
  imports: [
    IonicPageModule.forChild(HomePageFR),
  ],
  exports: [
    HomePageFR
  ]
})
export class HomePageFRModule {}
