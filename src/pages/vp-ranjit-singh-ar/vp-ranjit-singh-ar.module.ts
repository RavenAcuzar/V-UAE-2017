import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPrsPageAR } from '../vp-ranjit-singh-ar/vp-ranjit-singh-ar';

@NgModule({
  declarations: [
    VPrsPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPrsPageAR),
  ],
  exports: [
    VPrsPageAR
  ]
})
export class VPrsPageARModule {}
