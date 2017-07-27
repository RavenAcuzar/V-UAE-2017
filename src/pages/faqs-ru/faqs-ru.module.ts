import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqsPageRU } from '../faqs-ru/faqs-ru';

@NgModule({
  declarations: [
    FaqsPageRU,
  ],
  imports: [
    IonicPageModule.forChild(FaqsPageRU),
  ],
  exports: [
    FaqsPageRU
  ]
})
export class FaqsPageRUModule {}
