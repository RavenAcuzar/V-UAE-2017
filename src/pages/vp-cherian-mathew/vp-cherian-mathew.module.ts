import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPcmPage } from '../vp-cherian-mathew/vp-cherian-mathew';

@NgModule({
  declarations: [
    VPcmPage,
  ],
  imports: [
    IonicPageModule.forChild(VPcmPage),
  ],
  exports: [
    VPcmPage
  ]
})
export class VPcmPageModule {}
