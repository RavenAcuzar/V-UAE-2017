import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdjPage } from '../vp-dev-johl/vp-dev-johl';

@NgModule({
  declarations: [
    VPdjPage,
  ],
  imports: [
    IonicPageModule.forChild(VPdjPage),
  ],
  exports: [
    VPdjPage
  ]
})
export class VPdjPageModule {}
