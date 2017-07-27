import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPageAR } from '../news-ar/news-ar';

@NgModule({
  declarations: [
    NewsPageAR,
  ],
  imports: [
    IonicPageModule.forChild(NewsPageAR),
  ],
  exports: [
    NewsPageAR
  ]
})
export class NewsPageARModule {}
