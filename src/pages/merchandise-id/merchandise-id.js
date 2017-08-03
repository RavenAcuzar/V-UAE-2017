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
import { Dubai101PageID } from '../dubai101-id/dubai101-id';
import { MarkPageID } from '../mark-id/mark-id';
var MerchandisePageID = (function () {
    function MerchandisePageID() {
        this.Dubai101PageID = Dubai101PageID;
        this.MarkPageID = MarkPageID;
    }
    MerchandisePageID.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MerchandisePage');
    };
    MerchandisePageID.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return MerchandisePageID;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], MerchandisePageID.prototype, "content", void 0);
MerchandisePageID = __decorate([
    IonicPage(),
    Component({
        selector: 'page-merchandise',
        templateUrl: 'merchandise-id.html'
    }),
    __metadata("design:paramtypes", [])
], MerchandisePageID);
export { MerchandisePageID };
//# sourceMappingURL=merchandise-id.js.map