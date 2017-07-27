import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmkPageAR } from '../vp-mahendra-kumar-ar/vp-mahendra-kumar-ar';

@NgModule({
  declarations: [
    VPmkPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPmkPageAR),
  ],
  exports: [
    VPmkPageAR
  ]
})
export class VPmkPageARModule {}
