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
import { Content, NavController, LoadingController } from 'ionic-angular';
import { allAboutPage } from '../allabout/allabout';
import { MarkPage } from '../mark/mark';
import { Dubai101Page } from '../dubai101/dubai101';
import { DownloadsPage } from '../downloads/downloads';
import { NewsPage } from '../news/news';
import { Observable } from 'rxjs/Rx';
var HomePage = (function () {
    function HomePage(navCtrl, http, loadingController) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingController = loadingController;
        // the object that will hold the new objects retrieved from the server
        this.myNews = [];
        this.allAboutPage = allAboutPage;
        this.MarkPage = MarkPage;
        this.NewsPage = NewsPage;
        this.Dubai101Page = Dubai101Page;
        this.DownloadsPage = DownloadsPage;
        this.getNews();
    }
    HomePage.prototype.getNews = function () {
        var _this = this;
        this.myNews = [];
        var loadingPopup = this.loadingController.create({
            content: 'Verifying...'
        });
        loadingPopup.present();
        var body = new URLSearchParams();
        body.set('action', 'getOldsNews');
        body.set('count', '4');
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
    HomePage.prototype.ngOnInit = function () {
        this._VDate = "2017-09-08";
        this.countDown();
    };
    HomePage.prototype.countDown = function () {
        var _this = this;
        Observable.interval(1000).map(function (x) {
            _this._diff = Date.parse(_this._VDate) - Date.parse(new Date().toString());
        }).subscribe(function (x) {
            _this._days = _this.getDays(_this._diff);
            _this._hours = _this.getHours(_this._diff);
            _this._minutes = _this.getMinutes(_this._diff);
            _this._seconds = _this.getSeconds(_this._diff);
        });
    };
    HomePage.prototype.getDays = function (t) {
        return Math.floor(t / (1000 * 60 * 60 * 24));
    };
    HomePage.prototype.getHours = function (t) {
        return Math.floor((t / (1000 * 60 * 60)) % 24);
    };
    HomePage.prototype.getMinutes = function (t) {
        return Math.floor((t / 1000 / 60) % 60);
    };
    HomePage.prototype.getSeconds = function (t) {
        return Math.floor((t / 1000) % 60);
    };
    HomePage.prototype.navigateToNews = function (id) {
        this.navCtrl.push(NewsPage, {
            id: id
        });
    };
    HomePage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return HomePage;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, Http, LoadingController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map