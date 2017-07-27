import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VMPPageRU } from '../vmp-dato-sri-vijay-eswaran-ru/vmp-dato-sri-vijay-eswaran-ru';

@NgModule({
  declarations: [
    VMPPageRU,
  ],
  imports: [
    IonicPageModule.forChild(VMPPageRU),
  ],
  exports: [
    VMPPageRU
  ]
})
export class VMPPageRUModule {}
