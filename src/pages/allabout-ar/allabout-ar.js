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
import { HomePageAR } from '../home-ar/home-ar';
import { NewslandingPageAR } from '../newslanding-ar/newslanding-ar';
var allAboutPageAR = (function () {
    function allAboutPageAR() {
        this.HomePageAR = HomePageAR;
        this.NewslandingPageAR = NewslandingPageAR;
    }
    allAboutPageAR.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return allAboutPageAR;
}());
allAboutPageAR = __decorate([
    IonicPage(),
    Component({
        selector: 'page-allabout',
        templateUrl: 'allabout-ar.html'
    }),
    __metadata("design:paramtypes", [])
], allAboutPageAR);
export { allAboutPageAR };
//# sourceMappingURL=allabout-ar.js.map