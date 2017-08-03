import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {allAboutPageID} from "./allabout-id";

@NgModule({
  declarations: [
    allAboutPageID,
  ],
  imports: [
    IonicPageModule.forChild(allAboutPageID),
  ],
  exports: [
    allAboutPageID
  ]
})
export class allAboutPageIDModule {}
