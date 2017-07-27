import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VMPPage } from '../vmp-dato-sri-vijay-eswaran/vmp-dato-sri-vijay-eswaran';

@NgModule({
  declarations: [
    VMPPage,
  ],
  imports: [
    IonicPageModule.forChild(VMPPage),
  ],
  exports: [
    VMPPage
  ]
})
export class VMPPageModule {}
