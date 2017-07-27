import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchandisePageID } from '../merchandise-id/merchandise-id';

@NgModule({
  declarations: [
    MerchandisePageID,
  ],
  imports: [
    IonicPageModule.forChild(MerchandisePageID),
  ],
  exports: [
    MerchandisePageID
  ]
})
export class MerchandisePageIDModule {}
