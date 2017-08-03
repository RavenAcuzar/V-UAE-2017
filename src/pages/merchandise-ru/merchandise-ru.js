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
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';
import { MarkPageRU } from '../mark-ru/mark-ru';
var MerchandisePageRU = (function () {
    function MerchandisePageRU() {
        this.Dubai101PageRU = Dubai101PageRU;
        this.MarkPageRU = MarkPageRU;
    }
    MerchandisePageRU.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MerchandisePage');
    };
    MerchandisePageRU.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return MerchandisePageRU;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], MerchandisePageRU.prototype, "content", void 0);
MerchandisePageRU = __decorate([
    IonicPage(),
    Component({
        selector: 'page-merchandise',
        templateUrl: 'merchandise-ru.html'
    }),
    __metadata("design:paramtypes", [])
], MerchandisePageRU);
export { MerchandisePageRU };
//# sourceMappingURL=merchandise-ru.js.map