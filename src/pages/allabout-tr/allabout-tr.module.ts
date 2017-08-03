import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {allAboutPageTR} from "./allabout-tr";

@NgModule({
  declarations: [
    allAboutPageTR,
  ],
  imports: [
    IonicPageModule.forChild(allAboutPageTR),
  ],
  exports: [
    allAboutPageTR
  ]
})
export class allAboutPageTRModule {}
