var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePageTR } from '../home-tr/home-tr';
import { NewslandingPageTR } from '../newslanding-tr/newslanding-tr';
var allAboutPageTR = (function () {
    function allAboutPageTR() {
        this.HomePageTR = HomePageTR;
        this.NewslandingPageTR = NewslandingPageTR;
    }
    allAboutPageTR.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return allAboutPageTR;
}());
allAboutPageTR = __decorate([
    IonicPage(),
    Component({
        selector: 'page-allabout',
        templateUrl: 'allabout-tr.html'
    }),
    __metadata("design:paramtypes", [])
], allAboutPageTR);
export { allAboutPageTR };
//# sourceMappingURL=allabout-tr.js.map