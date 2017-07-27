import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdsPage } from '../vp-david-sharma/vp-david-sharma';

@NgModule({
  declarations: [
    VPdsPage,
  ],
  imports: [
    IonicPageModule.forChild(VPdsPage),
  ],
  exports: [
    VPdsPage
  ]
})
export class VPdsPageModule {}
