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
import { MerchandisePageRU } from '../merchandise-ru/merchandise-ru';
import { DownloadsPageRU } from '../downloads-ru/downloads-ru';
var MarkPageRU = (function () {
    function MarkPageRU() {
        this.DownloadsPageRU = DownloadsPageRU;
        this.MerchandisePageRU = MerchandisePageRU;
    }
    MarkPageRU.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarkPage');
    };
    return MarkPageRU;
}());
MarkPageRU = __decorate([
    IonicPage(),
    Component({
        selector: 'page-mark',
        templateUrl: 'mark-ru.html'
    }),
    __metadata("design:paramtypes", [])
], MarkPageRU);
export { MarkPageRU };
//# sourceMappingURL=mark-ru.js.map