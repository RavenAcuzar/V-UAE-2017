import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPksPageRU } from '../vp-kuna-senathirajah-ru/vp-kuna-senathirajah-ru';

@NgModule({
  declarations: [
    VPksPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPksPageRU),
  ],
  exports: [
    VPksPageRU
  ]
})
export class VPksPageRUModule {}
