import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPftPageAR } from '../vp-ferdie-tolentino-ar/vp-ferdie-tolentino-ar';

@NgModule({
  declarations: [
    VPftPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VPftPageAR),
  ],
  exports: [
    VPftPageAR
  ]
})
export class VPftPageARModule {}
