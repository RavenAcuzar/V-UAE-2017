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
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPahPageID } from '../vp-adly-hassan-id/vp-adly-hassan-id';
var VPagPageID = (function () {
    function VPagPageID(navCtrl) {
        this.navCtrl = navCtrl;
        this.TheSpeakersPageID = TheSpeakersPageID;
        this.VPahPageID = VPahPageID;
    }
    VPagPageID.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return VPagPageID;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], VPagPageID.prototype, "content", void 0);
VPagPageID = __decorate([
    Component({
        selector: 'page-vp',
        templateUrl: 'vp-arun-george-id.html'
    }),
    __metadata("design:paramtypes", [NavController])
], VPagPageID);
export { VPagPageID };
//# sourceMappingURL=vp-arun-george-id.js.map