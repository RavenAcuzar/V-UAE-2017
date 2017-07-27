import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MerchandisePageFR } from '../merchandise-fr/merchandise-fr';
import { DownloadsPageFR } from '../downloads-fr/downloads-fr';

@IonicPage()
@Component({
  selector: 'page-mark',
  templateUrl: 'mark-fr.html'
})
export class MarkPageFR {
DownloadsPageFR = DownloadsPageFR;
MerchandisePageFR = MerchandisePageFR;
constructor() {
}

ionViewDidLoad() {
  console.log('ionViewDidLoad MarkPage');
}

}
