import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, LoadingController } from 'ionic-angular';
import { MarkPageID } from '../mark-id/mark-id';
import { FaqsPageID } from '../faqs-id/faqs-id';
import { File } from '@ionic-native/file';
import { DownloadsPage } from "../downloads/downloads";
import { FileTransfer } from "@ionic-native/file-transfer";
import { FileOpener } from "@ionic-native/file-opener";

@Component({
  selector: 'page-download',
  templateUrl: 'downloads-id.html'
})
export class DownloadsPageID extends DownloadsPage{
  FaqsPageID = FaqsPageID;
  MarkPageID = MarkPageID;

 constructor(protected fileTransfer: FileTransfer, protected navCtrl: NavController,
    protected platform: Platform, protected alertCtrl: AlertController, protected file: File,
    protected fileOpener: FileOpener, protected loadingCtrl: LoadingController) {

      super(fileTransfer, navCtrl, platform, alertCtrl,  file, fileOpener, loadingCtrl);
  }

}
