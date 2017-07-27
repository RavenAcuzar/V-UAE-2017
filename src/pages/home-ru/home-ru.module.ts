import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePageRU } from '../home-ru/home-ru';

@NgModule({
  declarations: [
    HomePageRU,
  ],
  imports: [
    IonicPageModule.forChild(HomePageRU),
  ],
  exports: [
    HomePageRU
  ]
})
export class HomePageRUModule {}
