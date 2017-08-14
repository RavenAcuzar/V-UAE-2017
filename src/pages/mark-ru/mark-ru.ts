import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, AlertController } from 'ionic-angular';
import { MerchandisePageRU } from '../merchandise-ru/merchandise-ru';
import { DownloadsPageRU } from '../downloads-ru/downloads-ru';
import { Http } from "@angular/http";
import { MarkPage } from "../mark/mark";

 
@Component({
  selector: 'page-mark',
  templateUrl: 'mark-ru.html'
})
export class MarkPageRU extends MarkPage {
  DownloadsPageRU = DownloadsPageRU;
  MerchandisePageRU = MerchandisePageRU;
  // constructor(protected fileChooser: FileChooser, protected http: Http,
  //   protected fileTransfer: FileTransfer, protected platform: Platform,
  //   protected file: File, protected loadingCtrl: LoadingController,
  //   protected alertCtrl: AlertController, protected fileOpener: FileOpener) {

  //   super(fileChooser, http, fileTransfer, platform, file, loadingCtrl, alertCtrl, fileOpener);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkPage');
  }

}
