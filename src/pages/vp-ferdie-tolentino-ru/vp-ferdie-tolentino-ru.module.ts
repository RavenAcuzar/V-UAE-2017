import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPftPageRU } from '../vp-ferdie-tolentino-ru/vp-ferdie-tolentino-ru';

@NgModule({
  declarations: [
    VPftPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPftPageRU),
  ],
  exports: [
    VPftPageRU
  ]
})
export class VPftPageRUModule {}
