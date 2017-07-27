import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VMPPageFR } from '../vmp-dato-sri-vijay-eswaran-fr/vmp-dato-sri-vijay-eswaran-fr';

@NgModule({
  declarations: [
    VMPPageFR,
  ],
  imports: [
    IonicPageModule.forChild(VMPPageFR),
  ],
  exports: [
    VMPPageFR
  ]
})
export class VMPPageFRModule {}
