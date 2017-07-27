import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { allAboutPageAR } from '../allabout-ar/allabout-ar';

@NgModule({
  declarations: [
    allAboutPageAR,
  ],
  imports: [
    IonicPageModule.forChild(allAboutPageAR),
  ],
  exports: [
    allAboutPageAR
  ]
})
export class allAboutPageARModule {}
