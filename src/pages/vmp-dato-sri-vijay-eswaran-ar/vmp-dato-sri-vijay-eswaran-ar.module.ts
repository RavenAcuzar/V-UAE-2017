import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VMPPageAR } from '../vmp-dato-sri-vijay-eswaran-ar/vmp-dato-sri-vijay-eswaran-ar';

@NgModule({
  declarations: [
    VMPPageAR,
  ],
  imports: [
    IonicPageModule.forChild(VMPPageAR),
  ],
  exports: [
    VMPPageAR
  ]
})
export class VMPPageARModule {}
