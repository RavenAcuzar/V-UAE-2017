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
import { MerchandisePageID } from '../merchandise-id/merchandise-id';
import { DownloadsPageID } from '../downloads-id/downloads-id';
var MarkPageID = (function () {
    function MarkPageID() {
        this.DownloadsPageID = DownloadsPageID;
        this.MerchandisePageID = MerchandisePageID;
    }
    MarkPageID.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarkPage');
    };
    return MarkPageID;
}());
MarkPageID = __decorate([
    IonicPage(),
    Component({
        selector: 'page-mark',
        templateUrl: 'mark-id.html'
    }),
    __metadata("design:paramtypes", [])
], MarkPageID);
export { MarkPageID };
//# sourceMappingURL=mark-id.js.map