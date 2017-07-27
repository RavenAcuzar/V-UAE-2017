import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewslandingPageID } from '../newslanding-id/newslanding-id';

@NgModule({
  declarations: [
    NewslandingPageID,
  ],
  imports: [
    IonicPageModule.forChild(NewslandingPageID),
  ],
  exports: [
    NewslandingPageID
  ]
})
export class NewslandingPageIDModule {}
