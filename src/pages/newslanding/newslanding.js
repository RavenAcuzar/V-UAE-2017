var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { IonicPage, Content, NavController, LoadingController } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { allAboutPage } from '../allabout/allabout';
import { NewsPage } from '../news/news';
var NewslandingPage = (function () {
    function NewslandingPage(navCtrl, http, loadingController) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingController = loadingController;
        this.myNews = [];
        this.allAboutPage = allAboutPage;
        this.TheSpeakersPage = TheSpeakersPage;
        this.NewsPage = NewsPage;
        this.getNews();
    }
    NewslandingPage.prototype.getNews = function () {
        var _this = this;
        this.myNews = [];
        var loadingPopup = this.loadingController.create({
            content: 'Verifying...'
        });
        loadingPopup.present();
        var body = new URLSearchParams();
        body.set('action', 'getOldsNews');
        body.set('count', '10');
        body.set('page', '1');
        body.set('language', window.localStorage['mylanguage']);
        var options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
        this.http.post('http://cums.the-v.net/site.aspx', body, options)
            .subscribe(function (response) {
            _this.myNews = response.json();
        }, null, function () {
            loadingPopup.dismiss();
        });
    };
    NewslandingPage.prototype.ngOnInit = function () {
    };
    NewslandingPage.prototype.navigateToNews = function (id) {
        this.navCtrl.push(NewsPage, {
            id: id
        });
    };
    NewslandingPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return NewslandingPage;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], NewslandingPage.prototype, "content", void 0);
NewslandingPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-newslanding',
        templateUrl: 'newslanding.html'
    }),
    __metadata("design:paramtypes", [NavController, Http, LoadingController])
], NewslandingPage);
export { NewslandingPage };
//# sourceMappingURL=newslanding.js.map