import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdsPageRU } from '../vp-david-sharma-ru/vp-david-sharma-ru';

@NgModule({
  declarations: [
    VPdsPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPdsPageRU),
  ],
  exports: [
    VPdsPageRU
  ]
})
export class VPdsPageRUModule {}
