import { Component } from '@angular/core';
import { NavController, Platform, AlertController, LoadingController } from 'ionic-angular';
import { FileTransferObject, FileTransfer } from '@ionic-native/file-transfer'
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Base64ToGallery } from "@ionic-native/base64-to-gallery";
import { File } from '@ionic-native/file'
import { MarkPage } from '../mark/mark';
import { FaqsPage } from '../faqs/faqs';

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

  constructor(
    protected fileTransfer: FileTransfer,
    protected navCtrl: NavController,
    protected platform: Platform,
    protected alertCtrl: AlertController,
    protected file: File,
    protected base64ToGallery: Base64ToGallery,
    protected androidPermissions: AndroidPermissions,
    protected loadingCtrl: LoadingController) {

    this.fileTransferObject = this.fileTransfer.create();

    if (this.platform.is('cordova')) {
      this.downloadLocation = this.file.cacheDirectory;
      this.canDownload = true;
    }
  }

  ionViewCanEnter() {
    if (this.platform.is('android')) {
      return this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(result => {
        if (result.hasPermission) {
          return true;
        } else {
          return this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(a => {
            if (!a.hasPermission) {
              let alert = this.alertCtrl.create({
                title: 'Permission not allowed',
                subTitle: 'You cannot access this app\'s feature without allowing the storage permission.',
                buttons: [{
                  text: 'Ok',
                  handler: () => {
                    alert.dismiss();
                    return false;
                  }
                }],
                cssClass: 'alertDanger'
              });
              alert.present();
            }
            return a.hasPermission;
          }).catch(e => {
            console.log(JSON.stringify(e));
            let alert = this.alertCtrl.create({
              title: 'Permission not allowed',
              subTitle: 'You cannot access this app\'s feature without allowing the storage permission.',
              buttons: [{
                text: 'Ok',
                handler: () => {
                  alert.dismiss();
                  return false;
                }
              }],
              cssClass: 'alertDanger'
            });
            alert.present();
            return false;
          });
        }
      }).catch(e => {
        return this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
      });
    } else {
      return true;
    }
  }

  downloadMobileWallpaper() {
    this.download("http://the-v.net/images/default-source/vcon17/mobile-wallpaper.png", 'mobile-wallpaper.png');
  }

  downloadTabletWallpaper() {
    this.download("http://the-v.net/images/default-source/vcon17/tablet-wallpaper.png", 'tablet-wallpaper.png');
  }

  download(url: string, filename: string) {
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
        }],
        cssClass: 'alertDanger'
      });
      alert.present();

    } else {
      let loadingPopup = this.loadingCtrl.create({
        content: 'Downloading...'
      });
      loadingPopup.present();

      let imagePath = this.downloadLocation + filename;
      this.fileTransferObject.download(url, imagePath, true).then((entry) => {
        entry.file((file) => {
          let image = new Image();
          image.onload = () => {
            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');

            canvas.height = image.height;
            canvas.width = image.width;

            context.drawImage(image, 0, 0, image.width, image.height);
            this.base64ToGallery.base64ToGallery(canvas.toDataURL(), { prefix: '_img' }).then(libraryItem => {
              loadingPopup.dismiss();
              canvas.remove();

              let alert = this.alertCtrl.create({
                title: 'Download successful!',
                subTitle: 'The wallpaper has now been downloaded to your photo library.',
                buttons: [{
                  text: 'Ok',
                  handler: () => {
                    alert.dismiss();
                    return false;
                  }
                }],
                cssClass: 'alert'
              });
              alert.present();
            }).catch(e => {
              loadingPopup.dismiss();
              this.onErrorWithWallpaperDownload(e);
            });
          };
          image.onerror = () => {
            let alert = this.alertCtrl.create({
              title: 'Cannot download!',
              subTitle: 'Something went wrong.',
              buttons: [{
                text: 'Ok',
                handler: () => {
                  alert.dismiss();
                  return false;
                }
              }],
              cssClass: 'alertDanger'
            });
            alert.present();
          };
          image.src = imagePath;
        }, e => {
          this.onErrorWithWallpaperDownload(e);
        });
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
          }],
          cssClass: 'alertDanger'
        });
        alert.present();
      });
    }
  }

  private onErrorWithWallpaperDownload(error) {
    let alert = this.alertCtrl.create({
      title: 'Error occurred!',
      subTitle: 'Cannot open the downloaded wallpaper. Please try again.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          alert.dismiss();
          return false;
        }
      }],
      cssClass: 'alertDanger'
    });
    alert.present();
  };
}
