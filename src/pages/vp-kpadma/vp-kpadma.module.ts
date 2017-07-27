import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPkpPage } from '../vp-kpadma/vp-kpadma';

@NgModule({
  declarations: [
    VPkpPage,
  ],
  imports: [
    IonicPageModule.forChild(VPkpPage),
  ],
  exports: [
    VPkpPage
  ]
})
export class VPkpPageModule {}
