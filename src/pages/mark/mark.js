var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, LoadingController, AlertController } from 'ionic-angular';
import { MerchandisePage } from '../merchandise/merchandise';
import { DownloadsPage } from '../downloads/downloads';
import { FileChooser } from "@ionic-native/file-chooser";
import { Http } from "@angular/http";
import { FileTransfer } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";
var MarkPage = (function () {
    function MarkPage(fileChooser, http, fileTransfer, platform, file, loadingCtrl, alertCtrl, fileOpener) {
        this.fileChooser = fileChooser;
        this.http = http;
        this.fileTransfer = fileTransfer;
        this.platform = platform;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.DownloadsPage = DownloadsPage;
        this.MerchandisePage = MerchandisePage;
        this.ss = false;
        this.badge = ''; // id of the badge
        this.chosenFilePath = '';
        this.badgeImageIsReady = false;
        this.fileTransferObject = this.fileTransfer.create();
        if (this.platform.is('cordova')) {
            if (this.platform.is('ios')) {
                this.downloadLocation = file.dataDirectory;
                this.canDownload = true;
            }
            else if (this.platform.is('android')) {
                this.downloadLocation = file.externalDataDirectory;
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
    MarkPage.prototype.badgeValueChanged = function () {
        var _this = this;
        if (this.ss) {
            var loadingPopUp_1 = this.loadingCtrl.create({
                content: 'Processing your image...'
            });
            loadingPopUp_1.present();
            var guid_1 = this.createGuid();
            var formData = new FormData();
            formData.append("UploadedImage", this.chosenFilePath);
            formData.append("type", "coverbadge");
            formData.append("action", guid_1);
            formData.append("badge", this.badge);
            this.http.post('http://cums.the-v.net/app_site.aspx', formData, {}).subscribe(function (response) {
                _this.badgeImagePath = "http://cums.the-v.net/app_site.aspx?id=" + guid_1 + ".jpeg";
                _this.badgeImageIsReady = true;
                loadingPopUp_1.dismiss();
            }, function (e) {
                _this.badgeImageIsReady = false;
                var alert = _this.alertCtrl.create({
                    title: 'Error occurred!',
                    subTitle: 'Cannot place the badge on your image. Please try again.',
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
                loadingPopUp_1.dismiss();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Error occurred!',
                subTitle: 'No Photo selected.',
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
    };
    MarkPage.prototype.inputImageChanged = function (event) {
        this.chosenFilePath = event.target.files[0];
        //console.log(JSON.stringify(this.chosenFilePath));
        this.ss = true;
        this.filename = event.target.files[0].name;
    };
    MarkPage.prototype.downloadImage = function () {
        var _this = this;
        if (!this.canDownload) {
            var alert_2 = this.alertCtrl.create({
                title: 'Cannot download!',
                subTitle: 'Your platform is not supported.',
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            alert_2.dismiss();
                            return false;
                        }
                    }],
                cssClass: 'alertDanger'
            });
            alert_2.present();
        }
        else {
            if (this.badgeImageIsReady) {
                var filename = "/BadgeImage.png";
                var folderLocation_1 = "VUAE2017/";
                var fileDestination_1 = this.downloadLocation + folderLocation_1 + filename;
                this.file.checkDir(this.downloadLocation, folderLocation_1).then(function (_) {
                    _this.downloadFile(fileDestination_1, _this.badgeImagePath);
                }).catch(function (e) {
                    _this.file.createDir(_this.downloadLocation, folderLocation_1, false).then(function (_) {
                        _this.downloadFile(fileDestination_1, _this.badgeImagePath);
                    }).catch(_this.onErrorWithWallpaperDownload);
                });
            }
        }
    };
    MarkPage.prototype.createGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    MarkPage.prototype.downloadFile = function (fileDestination, url) {
        var _this = this;
        var loadingPopup = this.loadingCtrl.create({
            content: 'Downloading...'
        });
        loadingPopup.present();
        this.fileTransferObject.download(url, fileDestination, true).then(function (entry) {
            loadingPopup.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Download successful!',
                subTitle: 'Hooray! Click \'Open\' to view your marked photo.',
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
                subTitle: 'Your marked photo was not downloaded successfully. Please try again.',
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
    MarkPage.prototype.onErrorWithWallpaperDownload = function (error) {
        var alert = this.alertCtrl.create({
            title: 'Error occurred!',
            subTitle: 'Cannot open your badged image. Please try again.',
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
    return MarkPage;
}());
__decorate([
    ViewChild('inputImage'),
    __metadata("design:type", ElementRef)
], MarkPage.prototype, "inputImage", void 0);
MarkPage = __decorate([
    Component({
        selector: 'page-mark',
        templateUrl: 'mark.html'
    }),
    __metadata("design:paramtypes", [FileChooser, Http,
        FileTransfer, Platform,
        File, LoadingController,
        AlertController, FileOpener])
], MarkPage);
export { MarkPage };
//# sourceMappingURL=mark.js.map