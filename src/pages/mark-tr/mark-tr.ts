import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MerchandisePageTR } from '../merchandise-tr/merchandise-tr';
import { DownloadsPageTR } from '../downloads-tr/downloads-tr';

@IonicPage()
@Component({
  selector: 'page-mark',
  templateUrl: 'mark-tr.html'
})
export class MarkPageTR {
DownloadsPageTR = DownloadsPageTR;
MerchandisePageTR = MerchandisePageTR;
constructor() {
}

ionViewDidLoad() {
  console.log('ionViewDidLoad MarkPage');
}

}
