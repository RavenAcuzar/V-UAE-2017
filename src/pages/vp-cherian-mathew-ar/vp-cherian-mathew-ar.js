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
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPdsPageAR } from '../vp-david-sharma-ar/vp-david-sharma-ar';
var VPcmPageAR = (function () {
    function VPcmPageAR(navCtrl) {
        this.navCtrl = navCtrl;
        this.TheSpeakersPageAR = TheSpeakersPageAR;
        this.VPdsPageAR = VPdsPageAR;
    }
    VPcmPageAR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return VPcmPageAR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], VPcmPageAR.prototype, "content", void 0);
VPcmPageAR = __decorate([
    Component({
        selector: 'page-vp',
        templateUrl: 'vp-cherian-mathew-ar.html'
    }),
    __metadata("design:paramtypes", [NavController])
], VPcmPageAR);
export { VPcmPageAR };
//# sourceMappingURL=vp-cherian-mathew-ar.js.map