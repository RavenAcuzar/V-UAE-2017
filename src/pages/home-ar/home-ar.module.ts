import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePageAR } from '../home-ar/home-ar';

@NgModule({
  declarations: [
    HomePageAR,
  ],
  imports: [
    IonicPageModule.forChild(HomePageAR),
  ],
  exports: [
    HomePageAR
  ]
})
export class HomePageARModule {}
