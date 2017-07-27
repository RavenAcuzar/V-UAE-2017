import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPahPage } from '../vp-adly-hassan/vp-adly-hassan';

@NgModule({
  declarations: [
    VPahPage,
  ],
  imports: [
    IonicPageModule.forChild(VPahPage),
  ],
  exports: [
    VPahPage
  ]
})
export class VPahPageModule {}
