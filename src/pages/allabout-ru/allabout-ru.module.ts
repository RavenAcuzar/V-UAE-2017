import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {allAboutPageRU} from "./allabout-ru";

@NgModule({
  declarations: [
    allAboutPageRU,
  ],
  imports: [
    IonicPageModule.forChild(allAboutPageRU),
  ],
  exports: [
    allAboutPageRU
  ]
})
export class allAboutPageRUModule {}
