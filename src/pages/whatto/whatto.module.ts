import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhattoPage } from '../whatto/whatto';

@NgModule({
  declarations: [
    WhattoPage,
  ],
  imports: [
    IonicPageModule.forChild(WhattoPage),
  ],
  exports: [
    WhattoPage
  ]
})
export class WhattoPageModule {}
