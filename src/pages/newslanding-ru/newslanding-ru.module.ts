import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewslandingPageRU } from '../newslanding-ru/newslanding-ru';

@NgModule({
  declarations: [
    NewslandingPageRU,
  ],
  imports: [
    IonicPageModule.forChild(NewslandingPageRU),
  ],
  exports: [
    NewslandingPageRU
  ]
})
export class NewslandingPageRUModule {}
