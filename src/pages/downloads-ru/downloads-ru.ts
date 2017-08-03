import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Platform } from 'ionic-angular';
import { MarkPageRU } from '../mark-ru/mark-ru';
import { FaqsPageRU } from '../faqs-ru/faqs-ru';
import { File } from '@ionic-native/file';
import { DownloadsPage } from "../downloads/downloads";
import { FileTransfer } from "@ionic-native/file-transfer";
import { FileOpener } from "@ionic-native/file-opener";

@Component({
  selector: 'page-download',
  templateUrl: 'downloads-ru.html'
})
export class DownloadsPageRU extends DownloadsPage {
  FaqsPageRU = FaqsPageRU;
  MarkPageRU = MarkPageRU;

 constructor(protected fileTransfer: FileTransfer, protected navCtrl: NavController,
    protected platform: Platform, protected alertCtrl: AlertController, protected file: File,
    protected fileOpener: FileOpener, protected loadingCtrl: LoadingController) {

      super(fileTransfer, navCtrl, platform, alertCtrl,  file, fileOpener, loadingCtrl);
  }

}
