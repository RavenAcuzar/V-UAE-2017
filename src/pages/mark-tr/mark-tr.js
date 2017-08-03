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
import { MerchandisePageTR } from '../merchandise-tr/merchandise-tr';
import { DownloadsPageTR } from '../downloads-tr/downloads-tr';
var MarkPageTR = (function () {
    function MarkPageTR() {
        this.DownloadsPageTR = DownloadsPageTR;
        this.MerchandisePageTR = MerchandisePageTR;
    }
    MarkPageTR.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarkPage');
    };
    return MarkPageTR;
}());
MarkPageTR = __decorate([
    IonicPage(),
    Component({
        selector: 'page-mark',
        templateUrl: 'mark-tr.html'
    }),
    __metadata("design:paramtypes", [])
], MarkPageTR);
export { MarkPageTR };
//# sourceMappingURL=mark-tr.js.map