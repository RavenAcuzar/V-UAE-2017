import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqsPageID } from '../faqs-id/faqs-id';

@NgModule({
  declarations: [
    FaqsPageID,
  ],
  imports: [
    IonicPageModule.forChild(FaqsPageID),
  ],
  exports: [
    FaqsPageID
  ]
})
export class FaqsPageIDModule {}
