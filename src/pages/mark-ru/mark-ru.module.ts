import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkPageRU } from '../mark-ru/mark-ru';

@NgModule({
  declarations: [
    MarkPageRU,
  ],
  imports: [
    IonicPageModule.forChild(MarkPageRU),
  ],
  exports: [
    MarkPageRU
  ]
})
export class MarkPageRUModule {}
