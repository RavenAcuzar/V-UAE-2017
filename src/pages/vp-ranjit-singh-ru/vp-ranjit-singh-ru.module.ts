import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPrsPageRU } from '../vp-ranjit-singh-ru/vp-ranjit-singh-ru';

@NgModule({
  declarations: [
    VPrsPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPrsPageRU),
  ],
  exports: [
    VPrsPageRU
  ]
})
export class VPrsPageRUModule {}
