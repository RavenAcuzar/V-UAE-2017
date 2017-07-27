import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchandisePageRU } from '../merchandise-ru/merchandise-ru';

@NgModule({
  declarations: [
    MerchandisePageRU,
  ],
  imports: [
    IonicPageModule.forChild(MerchandisePageRU),
  ],
  exports: [
    MerchandisePageRU
  ]
})
export class MerchandisePageRUModule {}
