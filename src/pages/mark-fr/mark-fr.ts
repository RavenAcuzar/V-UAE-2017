import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, AlertController } from 'ionic-angular';
import { MerchandisePageFR } from '../merchandise-fr/merchandise-fr';
import { DownloadsPageFR } from '../downloads-fr/downloads-fr';
import { MarkPage } from "../mark/mark";
import { Http } from "@angular/http";

 
@Component({
  selector: 'page-mark',
  templateUrl: 'mark-fr.html'
})
export class MarkPageFR extends MarkPage {
  DownloadsPageFR = DownloadsPageFR;
  MerchandisePageFR = MerchandisePageFR;
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
