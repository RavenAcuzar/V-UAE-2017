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
import { VFPPageAR } from '../vfp-joseph-bismark-ar/vfp-joseph-bismark-ar';
var VMPPageAR = (function () {
    function VMPPageAR(navCtrl) {
        this.navCtrl = navCtrl;
        this.TheSpeakersPageAR = TheSpeakersPageAR;
        this.VFPPageAR = VFPPageAR;
    }
    VMPPageAR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return VMPPageAR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], VMPPageAR.prototype, "content", void 0);
VMPPageAR = __decorate([
    Component({
        selector: 'page-vp',
        templateUrl: 'vmp-dato-sri-vijay-eswaran-ar.html'
    }),
    __metadata("design:paramtypes", [NavController])
], VMPPageAR);
export { VMPPageAR };
//# sourceMappingURL=vmp-dato-sri-vijay-eswaran-ar.js.map