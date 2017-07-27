import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPrsPage } from '../vp-ranjit-singh/vp-ranjit-singh';

@NgModule({
  declarations: [
    VPrsPage,
  ],
  imports: [
    IonicPageModule.forChild(VPrsPage),
  ],
  exports: [
    VPrsPage
  ]
})
export class VPrsPageModule {}
