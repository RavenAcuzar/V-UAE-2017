import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VMPPageTR } from '../vmp-dato-sri-vijay-eswaran-tr/vmp-dato-sri-vijay-eswaran-tr';

@NgModule({
  declarations: [
    VMPPageTR,
  ],
  imports: [
    IonicPageModule.forChild(VMPPageTR),
  ],
  exports: [
    VMPPageTR
  ]
})
export class VMPPageTRModule {}
