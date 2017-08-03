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
import { Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewslandingPage } from '../newslanding/newslanding';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
var NewsPage = (function () {
    function NewsPage(navCtrl, navParams, loadingController, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.http = http;
        this.NewslandingPage = NewslandingPage;
        this.TheSpeakersPage = TheSpeakersPage;
        // The news object that will be retrieved from the server
        this.id = null;
        this.news = {};
        this.getNewsView();
    }
    NewsPage.prototype.getNewsView = function () {
        var _this = this;
        this.id = null;
        this.news = {};
        this.id = this.navParams.get('id');
        var loadingPopup = this.loadingController.create({
            content: 'Verifying...'
        });
        loadingPopup.present();
        var body = new URLSearchParams();
        body.set('action', 'getNews');
        body.set('URL', encodeURIComponent(this.id));
        body.set('language', window.localStorage['mylanguage']);
        var options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'
            })
        });
        this.http.post('http://cums.the-v.net/site.aspx', body)
            .subscribe(function (response) {
            _this.news = response.json()[0];
        }, null, function () {
            loadingPopup.dismiss();
        });
    };
    NewsPage.prototype.ngOnInit = function () {
    };
    NewsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return NewsPage;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], NewsPage.prototype, "content", void 0);
NewsPage = __decorate([
    Component({
        selector: 'page-news',
        templateUrl: 'news.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, LoadingController,
        Http])
], NewsPage);
export { NewsPage };
//# sourceMappingURL=news.js.map