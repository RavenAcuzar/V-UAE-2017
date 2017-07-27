import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkPageFR } from '../mark-fr/mark-fr';

@NgModule({
  declarations: [
    MarkPageFR,
  ],
  imports: [
    IonicPageModule.forChild(MarkPageFR),
  ],
  exports: [
    MarkPageFR
  ]
})
export class MarkPageFRModule {}
