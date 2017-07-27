import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewslandingPageAR } from '../newslanding-ar/newslanding-ar';

@NgModule({
  declarations: [
    NewslandingPageAR,
  ],
  imports: [
    IonicPageModule.forChild(NewslandingPageAR),
  ],
  exports: [
    NewslandingPageAR
  ]
})
export class NewslandingPageARModule {}
