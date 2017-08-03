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
import { HomePageID } from '../home-id/home-id';
import { NewslandingPageID } from '../newslanding-id/newslanding-id';
var allAboutPageID = (function () {
    function allAboutPageID() {
        this.HomePageID = HomePageID;
        this.NewslandingPageID = NewslandingPageID;
    }
    allAboutPageID.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return allAboutPageID;
}());
allAboutPageID = __decorate([
    IonicPage(),
    Component({
        selector: 'page-allabout',
        templateUrl: 'allabout-id.html'
    }),
    __metadata("design:paramtypes", [])
], allAboutPageID);
export { allAboutPageID };
//# sourceMappingURL=allabout-id.js.map