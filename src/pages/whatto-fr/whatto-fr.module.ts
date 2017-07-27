import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhattoPageFR } from '../whatto-fr/whatto-fr';

@NgModule({
  declarations: [
    WhattoPageFR,
  ],
  imports: [
    IonicPageModule.forChild(WhattoPageFR),
  ],
  exports: [
    WhattoPageFR
  ]
})
export class WhattoPageFRModule {}
