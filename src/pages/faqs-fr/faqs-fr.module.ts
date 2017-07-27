import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqsPageFR } from '../faqs-fr/faqs-fr';

@NgModule({
  declarations: [
    FaqsPageFR,
  ],
  imports: [
    IonicPageModule.forChild(FaqsPageFR),
  ],
  exports: [
    FaqsPageFR
  ]
})
export class FaqsPageFRModule {}
