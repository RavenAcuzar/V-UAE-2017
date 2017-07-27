import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPhnPage } from '../vp-hendra-nilam/vp-hendra-nilam';

@NgModule({
  declarations: [
    VPhnPage,
  ],
  imports: [
    IonicPageModule.forChild(VPhnPage),
  ],
  exports: [
    VPhnPage
  ]
})
export class VPhnPageModule {}
