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
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { allAboutPageAR } from '../allabout-ar/allabout-ar';
import { NewsPageAR } from '../news-ar/news-ar';
var NewslandingPageAR = (function () {
    function NewslandingPageAR() {
        this.allAboutPageAR = allAboutPageAR;
        this.TheSpeakersPageAR = TheSpeakersPageAR;
        this.NewsPageAR = NewsPageAR;
    }
    NewslandingPageAR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return NewslandingPageAR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], NewslandingPageAR.prototype, "content", void 0);
NewslandingPageAR = __decorate([
    IonicPage(),
    Component({
        selector: 'page-newslanding',
        templateUrl: 'newslanding-ar.html'
    }),
    __metadata("design:paramtypes", [])
], NewslandingPageAR);
export { NewslandingPageAR };
//# sourceMappingURL=newslanding-ar.js.map