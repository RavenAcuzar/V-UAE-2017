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
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VFPPageRU } from '../vfp-joseph-bismark-ru/vfp-joseph-bismark-ru';
var VMPPageRU = (function () {
    function VMPPageRU(navCtrl) {
        this.navCtrl = navCtrl;
        this.TheSpeakersPageRU = TheSpeakersPageRU;
        this.VFPPageRU = VFPPageRU;
    }
    VMPPageRU.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return VMPPageRU;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], VMPPageRU.prototype, "content", void 0);
VMPPageRU = __decorate([
    Component({
        selector: 'page-vp',
        templateUrl: 'vmp-dato-sri-vijay-eswaran-ru.html'
    }),
    __metadata("design:paramtypes", [NavController])
], VMPPageRU);
export { VMPPageRU };
//# sourceMappingURL=vmp-dato-sri-vijay-eswaran-ru.js.map