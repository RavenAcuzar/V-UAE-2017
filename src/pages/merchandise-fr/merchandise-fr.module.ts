import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchandisePageFR } from '../merchandise-fr/merchandise-fr';

@NgModule({
  declarations: [
    MerchandisePageFR,
  ],
  imports: [
    IonicPageModule.forChild(MerchandisePageFR),
  ],
  exports: [
    MerchandisePageFR
  ]
})
export class MerchandisePageFRModule {}
