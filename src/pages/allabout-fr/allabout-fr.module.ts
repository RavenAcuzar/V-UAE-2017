import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {allAboutPageFR} from "./allabout-fr";

@NgModule({
  declarations: [
    allAboutPageFR,
  ],
  imports: [
    IonicPageModule.forChild(allAboutPageFR),
  ],
  exports: [
    allAboutPageFR
  ]
})
export class allAboutPageFRModule {}
