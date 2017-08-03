var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, Platform, AlertController, LoadingController } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { MarkPage } from '../mark/mark';
import { FaqsPage } from '../faqs/faqs';
var DownloadsPage = (function () {
    function DownloadsPage(fileTransfer, navCtrl, platform, alertCtrl, file, fileOpener, loadingCtrl) {
        this.fileTransfer = fileTransfer;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.fileOpener = fileOpener;
        this.loadingCtrl = loadingCtrl;
        this.FaqsPage = FaqsPage;
        this.MarkPage = MarkPage;
        this.downloadLocation = '';
        this.canDownload = false;
        this.fileTransferObject = this.fileTransfer.create();
        if (this.platform.is('cordova')) {
            if (this.platform.is('ios')) {
                this.downloadLocation = file.dataDirectory;
                this.canDownload = true;
            }
            else if (this.platform.is('android')) {
                this.downloadLocation = file.externalApplicationStorageDirectory;
                this.canDownload = true;
            }
        }
        else {
            if (this.platform.is('core') || this.platform.is('mobileweb') || this.platform.is('windows')) {
                this.downloadLocation = file.dataDirectory;
                this.canDownload = true;
            }
            else {
                this.canDownload = false;
            }
        }
    }
    DownloadsPage.prototype.downloadMobileWallpaper = function () {
        this.download("http://the-v.net/images/default-source/vcon17/mobile-wallpaper.png");
    };
    DownloadsPage.prototype.downloadTabletWallpaper = function () {
        this.download("http://the-v.net/images/default-source/vcon17/tablet-wallpaper.png");
    };
    DownloadsPage.prototype.download = function (url) {
        var _this = this;
        if (!this.canDownload) {
            var alert_1 = this.alertCtrl.create({
                title: 'Cannot download!',
                subTitle: 'Your platform is not supported.',
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            alert_1.dismiss();
                            return false;
                        }
                    }],
                cssClass: 'alertDanger'
            });
            alert_1.present();
        }
        else {
            var filename = "/Wallpaper_Phone.png";
            var folderLocation_1 = "VUAE2017/";
            var fileDestination_1 = this.downloadLocation + folderLocation_1 + filename;
            this.file.checkDir(this.downloadLocation, folderLocation_1).then(function (_) {
                _this.downloadFile(fileDestination_1, url);
            }).catch(function (e) {
                _this.file.createDir(_this.downloadLocation, folderLocation_1, false).then(function (_) {
                    _this.downloadFile(fileDestination_1, url);
                }).catch(_this.onErrorWithWallpaperDownload);
            });
        }
    };
    DownloadsPage.prototype.downloadFile = function (fileDestination, url) {
        var _this = this;
        var loadingPopup = this.loadingCtrl.create({
            content: 'Downloading...'
        });
        loadingPopup.present();
        this.fileTransferObject.download(url, fileDestination, true).then(function (entry) {
            loadingPopup.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Download successful!',
                subTitle: 'You can now use the wallpaper. Click \'Open\' to view the downloaded wallpaper.',
                buttons: [
                    {
                        text: 'Open',
                        handler: function () {
                            entry.file(function (file) {
                                _this.fileOpener.open(entry.toURL(), file.type)
                                    .then(function () {
                                    alert.dismiss();
                                    return false;
                                })
                                    .catch(function (e) {
                                    alert.dismiss();
                                    _this.onErrorWithWallpaperDownload(e);
                                });
                            }, function (e) {
                                alert.dismiss();
                                _this.onErrorWithWallpaperDownload(e);
                            });
                        }
                    }, {
                        text: 'Ok',
                        handler: function () {
                            alert.dismiss();
                            return false;
                        }
                    }
                ],
                cssClass: 'alert'
            });
            alert.present();
        }).catch(function (error) {
            loadingPopup.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Error occurred!',
                subTitle: 'The wallpaper was not downloaded successfully. Please try again.',
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            alert.dismiss();
                            return false;
                        }
                    }],
                cssClass: 'alertDanger'
            });
            alert.present();
        });
    };
    DownloadsPage.prototype.onErrorWithWallpaperDownload = function (error) {
        var alert = this.alertCtrl.create({
            title: 'Error occurred!',
            subTitle: 'Cannot open the downloaded wallpaper. Please try again.',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        alert.dismiss();
                        return false;
                    }
                }],
            cssClass: 'alertDanger'
        });
    };
    ;
    return DownloadsPage;
}());
DownloadsPage = __decorate([
    Component({
        selector: 'page-download',
        templateUrl: 'downloads.html'
    }),
    __metadata("design:paramtypes", [FileTransfer, NavController,
        Platform, AlertController, File,
        FileOpener, LoadingController])
], DownloadsPage);
export { DownloadsPage };
//# sourceMappingURL=downloads.js.map