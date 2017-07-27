import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MerchandisePageID } from '../merchandise-id/merchandise-id';
import { DownloadsPageID } from '../downloads-id/downloads-id';

@IonicPage()
@Component({
  selector: 'page-mark',
  templateUrl: 'mark-id.html'
})
export class MarkPageID {
DownloadsPageID = DownloadsPageID;
MerchandisePageID = MerchandisePageID;
constructor() {
}

ionViewDidLoad() {
  console.log('ionViewDidLoad MarkPage');
}

}
