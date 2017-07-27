import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhattoPageRU } from '../whatto-ru/whatto-ru';

@NgModule({
  declarations: [
    WhattoPageRU,
  ],
  imports: [
    IonicPageModule.forChild(WhattoPageRU),
  ],
  exports: [
    WhattoPageRU
  ]
})
export class WhattoPageRUModule {}
