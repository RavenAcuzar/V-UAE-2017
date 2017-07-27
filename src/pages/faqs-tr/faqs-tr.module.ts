import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqsPageTR } from '../faqs-tr/faqs-tr';

@NgModule({
  declarations: [
    FaqsPageTR,
  ],
  imports: [
    IonicPageModule.forChild(FaqsPageTR),
  ],
  exports: [
    FaqsPageTR
  ]
})
export class FaqsPageTRModule {}
