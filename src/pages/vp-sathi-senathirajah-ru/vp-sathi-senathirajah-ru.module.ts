import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPssPageRU } from '../vp-sathi-senathirajah-ru/vp-sathi-senathirajah-ru';

@NgModule({
  declarations: [
    VPssPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VPssPageRU),
  ],
  exports: [
    VPssPageRU
  ]
})
export class VPssPageRUModule {}
