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
import { VFPPageID } from '../vfp-joseph-bismark-id/vfp-joseph-bismark-id';
var VMPPageID = (function () {
    function VMPPageID(navCtrl) {
        this.navCtrl = navCtrl;
        this.TheSpeakersPageID = TheSpeakersPageID;
        this.VFPPageID = VFPPageID;
    }
    VMPPageID.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return VMPPageID;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], VMPPageID.prototype, "content", void 0);
VMPPageID = __decorate([
    Component({
        selector: 'page-vp',
        templateUrl: 'vmp-dato-sri-vijay-eswaran-ID.html'
    }),
    __metadata("design:paramtypes", [NavController])
], VMPPageID);
export { VMPPageID };
//# sourceMappingURL=vmp-dato-sri-vijay-eswaran-id.js.map