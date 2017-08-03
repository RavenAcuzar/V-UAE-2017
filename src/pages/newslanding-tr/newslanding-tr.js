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
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { allAboutPageTR } from '../allabout-tr/allabout-tr';
import { NewsPageTR } from '../news-tr/news-tr';
var NewslandingPageTR = (function () {
    function NewslandingPageTR() {
        this.allAboutPageTR = allAboutPageTR;
        this.TheSpeakersPageTR = TheSpeakersPageTR;
        this.NewsPageTR = NewsPageTR;
    }
    NewslandingPageTR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return NewslandingPageTR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], NewslandingPageTR.prototype, "content", void 0);
NewslandingPageTR = __decorate([
    IonicPage(),
    Component({
        selector: 'page-newslanding',
        templateUrl: 'newslanding-tr.html'
    }),
    __metadata("design:paramtypes", [])
], NewslandingPageTR);
export { NewslandingPageTR };
//# sourceMappingURL=newslanding-tr.js.map