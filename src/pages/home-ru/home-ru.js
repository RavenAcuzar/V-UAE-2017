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
import { allAboutPageRU } from '../allabout-ru/allabout-ru';
import { MarkPageRU } from '../mark-ru/mark-ru';
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';
import { DownloadsPageRU } from '../downloads-ru/downloads-ru';
import { NewsPageRU } from '../news-ru/news-ru';
var HomePageRU = (function () {
    function HomePageRU() {
        this.allAboutPageRU = allAboutPageRU;
        this.MarkPageRU = MarkPageRU;
        this.Dubai101PageRU = Dubai101PageRU;
        this.DownloadsPageRU = DownloadsPageRU;
        this.NewsPageRU = NewsPageRU;
    }
    HomePageRU.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return HomePageRU;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], HomePageRU.prototype, "content", void 0);
HomePageRU = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home-ru.html',
    }),
    __metadata("design:paramtypes", [])
], HomePageRU);
export { HomePageRU };
//# sourceMappingURL=home-ru.js.map