import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { allAboutPage } from '../allabout/allabout';

@NgModule({
  declarations: [
    allAboutPage,
  ],
  imports: [
    IonicPageModule.forChild(allAboutPage),
  ],
  exports: [
    allAboutPage
  ]
})
export class allAboutPageModule {}
