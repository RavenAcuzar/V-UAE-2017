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
import { Content, NavController } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPhnPage } from '../vp-hendra-nilam/vp-hendra-nilam';
var VPkpPage = (function () {
    function VPkpPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.TheSpeakersPage = TheSpeakersPage;
        this.VPhnPage = VPhnPage;
    }
    VPkpPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return VPkpPage;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], VPkpPage.prototype, "content", void 0);
VPkpPage = __decorate([
    Component({
        selector: 'page-vp',
        templateUrl: 'vp-kpadma.html'
    }),
    __metadata("design:paramtypes", [NavController])
], VPkpPage);
export { VPkpPage };
//# sourceMappingURL=vp-kpadma.js.map