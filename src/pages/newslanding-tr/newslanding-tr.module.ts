import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewslandingPageTR } from '../newslanding-tr/newslanding-tr';

@NgModule({
  declarations: [
    NewslandingPageTR,
  ],
  imports: [
    IonicPageModule.forChild(NewslandingPageTR),
  ],
  exports: [
    NewslandingPageTR
  ]
})
export class NewslandingPageTRModule {}
