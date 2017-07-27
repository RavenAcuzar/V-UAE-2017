import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchandisePageTR } from '../merchandise-tr/merchandise-tr';

@NgModule({
  declarations: [
    MerchandisePageTR,
  ],
  imports: [
    IonicPageModule.forChild(MerchandisePageTR),
  ],
  exports: [
    MerchandisePageTR
  ]
})
export class MerchandisePageTRModule {}
