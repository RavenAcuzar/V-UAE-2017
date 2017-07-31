import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, LoadingController } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { MarkPage } from '../mark/mark';
import { FaqsPage } from '../faqs/faqs';

declare var cordova: any;


@Component({
  selector: 'page-download',
  templateUrl: 'downloads.html'
})
export class DownloadsPage {
  FaqsPage = FaqsPage;
  MarkPage = MarkPage;

  fileTransferObject: FileTransferObject;
  downloadLocation: string = '';
  canDownload: boolean = false;

  constructor(private fileTransfer: FileTransfer, private navCtrl: NavController,
    private platform: Platform, private alertCtrl: AlertController,
    private fileOpener: FileOpener, private loadingCtrl: LoadingController) {

    this.fileTransferObject = this.fileTransfer.create();

    if (this.platform.is('cordova')) {
      if (this.platform.is('ios')) {
        this.downloadLocation = cordova.file.externalDataDirectory;
        this.canDownload = true;
      } else if (this.platform.is('android')) {
        this.downloadLocation = cordova.file.externalDataDirectory;
        this.canDownload = true;
      }
    } else {
      if (this.platform.is('core') || this.platform.is('mobileweb') || this.platform.is('windows')) {
        this.downloadLocation = cordova.file.dataDirectory;
        this.canDownload = true;
      } else {
        this.canDownload = false;
      }
    }
  }

  downloadMobileWallpaper() {
    this.download("http://the-v.net/images/default-source/vcon17/mobile-wallpaper.png");
  }

  downloadTabletWallpaper() {
    this.download("http://the-v.net/images/default-source/vcon17/tablet-wallpaper.png");
  }

  download(url: string) {
    if (!this.canDownload) {
      let alert = this.alertCtrl.create({
        title: 'Cannot download!',
        subTitle: 'Your platform is not supported.',
        buttons: [{
          text: 'Ok',
          handler: () => {
            alert.dismiss();
            return false;
          }
        }]
      });
      alert.present();

    } else {
      let filename = "/Wallpaper_Phone.png";
      let fileDestination = this.downloadLocation + filename;

      let loadingPopup = this.loadingCtrl.create({
        content: 'Downloading...'
      });
      loadingPopup.present();

      console.log(fileDestination);
      this.fileTransferObject.download(url, fileDestination, true).then((entry) => {
        loadingPopup.dismiss();

        let alert = this.alertCtrl.create({
          title: 'Download successful!',
          subTitle: 'You can now use the wallpaper. Click \'Open\' to view the downloaded wallpaper.',
          buttons: [
            // {
            //   text: 'Open',
            //   handler: () => {
            //     entry.file((file) => {
            //       this.fileOpener.open(entry.toURL(), file.type)
            //         .then(() => {
            //           alert.dismiss();
            //           return false;
            //         })
            //         .catch(this.onErrorWhileOpening);
            //     }, this.onErrorWhileOpening);
            //   }
            // },
            {
              text: 'Ok',
              handler: () => {
                alert.dismiss();
                return false;
              }
            }
          ]
        });
        alert.present();
      }).catch((error) => {
        loadingPopup.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Error occurred!',
          subTitle: 'The wallpaper was not downloaded successfully. Please try again.',
          buttons: [{
            text: 'Ok',
            handler: () => {
              alert.dismiss();
              return false;
            }
          }]
        });
        alert.present();
      });
    }
  }

  private onErrorWhileOpening(error) {
    let alert = this.alertCtrl.create({
      title: 'Error occurred!',
      subTitle: 'Cannot open the downloaded wallpaper. Please try again.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          alert.dismiss();
          return false;
        }
      }]
    });
  };
}
