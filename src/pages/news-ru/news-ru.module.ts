import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPageRU } from '../news-ru/news-ru';

@NgModule({
  declarations: [
    NewsPageRU,
  ],
  imports: [
    IonicPageModule.forChild(NewsPageRU),
  ],
  exports: [
    NewsPageRU
  ]
})
export class NewsPageRUModule {}
