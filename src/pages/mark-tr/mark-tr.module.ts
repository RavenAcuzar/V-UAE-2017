import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkPageTR } from '../mark-tr/mark-tr';

@NgModule({
  declarations: [
    MarkPageTR,
  ],
  imports: [
    IonicPageModule.forChild(MarkPageTR),
  ],
  exports: [
    MarkPageTR
  ]
})
export class MarkPageTRModule {}
