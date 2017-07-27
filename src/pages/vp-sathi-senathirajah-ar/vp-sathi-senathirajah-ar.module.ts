import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPssPageAR } from '../vp-sathi-senathirajah-ar/vp-sathi-senathirajah-ar';

@NgModule({
  declarations: [
    VPssPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPssPageAR),
  ],
  exports: [
    VPssPageAR
  ]
})
export class VPssPageARModule {}
