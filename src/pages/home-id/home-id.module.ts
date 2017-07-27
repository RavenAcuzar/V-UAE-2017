import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePageID } from '../home-id/home-id';

@NgModule({
  declarations: [
    HomePageID,
  ],
  imports: [
    IonicPageModule.forChild(HomePageID),
  ],
  exports: [
    HomePageID
  ]
})
export class HomePageIDModule {}
