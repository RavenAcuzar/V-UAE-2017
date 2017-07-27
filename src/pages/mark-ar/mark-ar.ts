import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MerchandisePageAR } from '../merchandise-ar/merchandise-ar';
import { DownloadsPageAR } from '../downloads-ar/downloads-ar';

@IonicPage()
@Component({
  selector: 'page-mark',
  templateUrl: 'mark-ar.html'
})
export class MarkPageAR {
DownloadsPageAR = DownloadsPageAR;
MerchandisePageAR = MerchandisePageAR;
constructor() {
}

ionViewDidLoad() {
  console.log('ionViewDidLoad MarkPageAR');
}

}
