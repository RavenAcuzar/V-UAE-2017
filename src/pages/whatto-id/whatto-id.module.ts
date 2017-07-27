import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhattoPageID } from '../whatto-id/whatto-id';

@NgModule({
  declarations: [
    WhattoPageID,
  ],
  imports: [
    IonicPageModule.forChild(WhattoPageID),
  ],
  exports: [
    WhattoPageID
  ]
})
export class WhattoPageIDModule {}
