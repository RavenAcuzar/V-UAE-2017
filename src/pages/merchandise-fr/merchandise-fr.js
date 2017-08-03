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
import { IonicPage, Content } from 'ionic-angular';
import { Dubai101PageFR } from '../dubai101-fr/dubai101-fr';
import { MarkPageFR } from '../mark-fr/mark-fr';
var MerchandisePageFR = (function () {
    function MerchandisePageFR() {
        this.Dubai101PageFR = Dubai101PageFR;
        this.MarkPageFR = MarkPageFR;
    }
    MerchandisePageFR.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MerchandisePage');
    };
    MerchandisePageFR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return MerchandisePageFR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], MerchandisePageFR.prototype, "content", void 0);
MerchandisePageFR = __decorate([
    IonicPage(),
    Component({
        selector: 'page-merchandise',
        templateUrl: 'merchandise-fr.html'
    }),
    __metadata("design:paramtypes", [])
], MerchandisePageFR);
export { MerchandisePageFR };
//# sourceMappingURL=merchandise-fr.js.map