import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhattoPageAR } from '../whatto-ar/whatto-ar';

@NgModule({
  declarations: [
    WhattoPageAR,
  ],
  imports: [
    IonicPageModule.forChild(WhattoPageAR),
  ],
  exports: [
    WhattoPageAR
  ]
})
export class WhattoPageARModule {}
