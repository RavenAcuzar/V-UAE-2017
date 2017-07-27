import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqsPageAR } from '../faqs-ar/faqs-ar';

@NgModule({
  declarations: [
    FaqsPageAR,
  ],
  imports: [
    IonicPageModule.forChild(FaqsPageAR),
  ],
  exports: [
    FaqsPageAR
  ]
})
export class FaqsPageARModule {}
