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
import { Dubai101PageTR } from '../dubai101-tr/dubai101-tr';
import { MarkPageTR } from '../mark-tr/mark-tr';
var MerchandisePageTR = (function () {
    function MerchandisePageTR() {
        this.Dubai101PageTR = Dubai101PageTR;
        this.MarkPageTR = MarkPageTR;
    }
    MerchandisePageTR.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MerchandisePage');
    };
    MerchandisePageTR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return MerchandisePageTR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], MerchandisePageTR.prototype, "content", void 0);
MerchandisePageTR = __decorate([
    IonicPage(),
    Component({
        selector: 'page-merchandise',
        templateUrl: 'merchandise-tr.html'
    }),
    __metadata("design:paramtypes", [])
], MerchandisePageTR);
export { MerchandisePageTR };
//# sourceMappingURL=merchandise-tr.js.map