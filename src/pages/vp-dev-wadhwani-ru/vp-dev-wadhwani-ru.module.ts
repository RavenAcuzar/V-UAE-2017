import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdwPageRU } from '../vp-dev-wadhwani-ru/vp-dev-wadhwani-ru';

@NgModule({
  declarations: [
    VPdwPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPdwPageRU),
  ],
  exports: [
    VPdwPageRU
  ]
})
export class VPdwPageRUModule {}
