var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Injectable } from '@angular/core';
import { IonicPage, Slides, Content, LoadingController } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
import { MarkPage } from '../mark/mark';
import { Http } from '@angular/http';
var MerchandisePage = (function () {
    function MerchandisePage(http, loadingController) {
        var _this = this;
        this.http = http;
        this.loadingController = loadingController;
        this.Dubai101Page = Dubai101Page;
        this.MarkPage = MarkPage;
        this.myMerchandise = [];
        var loadingPopup = this.loadingController.create({
            content: 'Verifying...'
        });
        loadingPopup.present();
        var url = 'http://cums.the-v.net/file.aspx';
        this.http.request(url).subscribe(function (result) {
            _this.myMerchandise = JSON.parse(result._body);
        }, null, function () {
            loadingPopup.dismiss();
        });
    }
    MerchandisePage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return MerchandisePage;
}());
__decorate([
    ViewChild(Slides),
    __metadata("design:type", Slides)
], MerchandisePage.prototype, "slides", void 0);
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], MerchandisePage.prototype, "content", void 0);
MerchandisePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-merchandise',
        templateUrl: 'merchandise.html',
    }),
    Injectable(),
    __metadata("design:paramtypes", [Http, LoadingController])
], MerchandisePage);
export { MerchandisePage };
//# sourceMappingURL=merchandise.js.map