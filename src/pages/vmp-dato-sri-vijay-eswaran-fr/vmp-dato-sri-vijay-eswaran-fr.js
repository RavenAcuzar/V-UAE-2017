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
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VFPPageFR } from '../vfp-joseph-bismark-fr/vfp-joseph-bismark-fr';
var VMPPageFR = (function () {
    function VMPPageFR(navCtrl) {
        this.navCtrl = navCtrl;
        this.TheSpeakersPageFR = TheSpeakersPageFR;
        this.VFPPageFR = VFPPageFR;
    }
    VMPPageFR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return VMPPageFR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], VMPPageFR.prototype, "content", void 0);
VMPPageFR = __decorate([
    Component({
        selector: 'page-vp',
        templateUrl: 'vmp-dato-sri-vijay-eswaran-fr.html'
    }),
    __metadata("design:paramtypes", [NavController])
], VMPPageFR);
export { VMPPageFR };
//# sourceMappingURL=vmp-dato-sri-vijay-eswaran-fr.js.map