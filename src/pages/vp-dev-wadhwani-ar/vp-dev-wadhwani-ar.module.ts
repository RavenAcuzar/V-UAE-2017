import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdwPageAR } from '../vp-dev-wadhwani-ar/vp-dev-wadhwani-ar';

@NgModule({
  declarations: [
    VPdwPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPdwPageAR),
  ],
  exports: [
    VPdwPageAR
  ]
})
export class VPdwPageARModule {}
