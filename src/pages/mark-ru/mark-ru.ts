import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MerchandisePageRU } from '../merchandise-ru/merchandise-ru';
import { DownloadsPageRU } from '../downloads-ru/downloads-ru';

@IonicPage()
@Component({
  selector: 'page-mark',
  templateUrl: 'mark-ru.html'
})
export class MarkPageRU {
DownloadsPageRU = DownloadsPageRU;
MerchandisePageRU = MerchandisePageRU;
constructor() {
}

ionViewDidLoad() {
  console.log('ionViewDidLoad MarkPage');
}

}
