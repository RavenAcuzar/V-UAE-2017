import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPageID } from '../news-id/news-id';

@NgModule({
  declarations: [
    NewsPageID,
  ],
  imports: [
    IonicPageModule.forChild(NewsPageID),
  ],
  exports: [
    NewsPageID
  ]
})
export class NewsPageIDModule {}
