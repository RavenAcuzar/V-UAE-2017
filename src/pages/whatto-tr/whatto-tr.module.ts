import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhattoPageTR } from '../whatto-tr/whatto-tr';

@NgModule({
  declarations: [
    WhattoPageTR,
  ],
  imports: [
    IonicPageModule.forChild(WhattoPageTR),
  ],
  exports: [
    WhattoPageTR
  ]
})
export class WhattoPageTRModule {}
