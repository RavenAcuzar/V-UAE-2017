import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkPageAR } from '../mark-ar/mark-ar';

@NgModule({
  declarations: [
    MarkPageAR,
  ],
  imports: [
    IonicPageModule.forChild(MarkPageAR),
  ],
  exports: [
    MarkPageAR
  ]
})
export class MarkPageARModule {}
