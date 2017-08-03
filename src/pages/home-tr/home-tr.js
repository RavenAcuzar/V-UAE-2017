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
import { Content } from 'ionic-angular';
import { allAboutPageTR } from '../allabout-tr/allabout-tr';
import { MarkPageTR } from '../mark-tr/mark-tr';
import { Dubai101PageTR } from '../dubai101-tr/dubai101-tr';
import { DownloadsPageTR } from '../downloads-tr/downloads-tr';
import { NewsPageTR } from '../news-tr/news-tr';
var HomePageTR = (function () {
    function HomePageTR() {
        this.allAboutPageTR = allAboutPageTR;
        this.MarkPageTR = MarkPageTR;
        this.Dubai101PageTR = Dubai101PageTR;
        this.DownloadsPageTR = DownloadsPageTR;
        this.NewsPageTR = NewsPageTR;
    }
    HomePageTR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return HomePageTR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], HomePageTR.prototype, "content", void 0);
HomePageTR = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home-tr.html',
    }),
    __metadata("design:paramtypes", [])
], HomePageTR);
export { HomePageTR };
//# sourceMappingURL=home-tr.js.map