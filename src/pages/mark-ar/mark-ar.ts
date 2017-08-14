import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, AlertController } from 'ionic-angular';
import { MerchandisePageAR } from '../merchandise-ar/merchandise-ar';
import { DownloadsPageAR } from '../downloads-ar/downloads-ar';
import { MarkPage } from "../mark/mark";
import { Http } from "@angular/http";

@Component({
  selector: 'page-mark',
  templateUrl: 'mark-ar.html'
})
export class MarkPageAR extends MarkPage {
  DownloadsPageAR = DownloadsPageAR;
  MerchandisePageAR = MerchandisePageAR;

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
