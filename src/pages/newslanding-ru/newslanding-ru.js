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
import { IonicPage, Content } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { allAboutPageRU } from '../allabout-ru/allabout-ru';
import { NewsPageRU } from '../news-ru/news-ru';
var NewslandingPageRU = (function () {
    function NewslandingPageRU() {
        this.allAboutPageRU = allAboutPageRU;
        this.TheSpeakersPageRU = TheSpeakersPageRU;
        this.NewsPageRU = NewsPageRU;
    }
    NewslandingPageRU.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return NewslandingPageRU;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], NewslandingPageRU.prototype, "content", void 0);
NewslandingPageRU = __decorate([
    IonicPage(),
    Component({
        selector: 'page-newslanding',
        templateUrl: 'newslanding-ru.html'
    }),
    __metadata("design:paramtypes", [])
], NewslandingPageRU);
export { NewslandingPageRU };
//# sourceMappingURL=newslanding-ru.js.map