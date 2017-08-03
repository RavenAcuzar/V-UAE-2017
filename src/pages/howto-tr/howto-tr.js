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
import { Content } from 'ionic-angular';
import { Dubai101PageTR } from '../dubai101-tr/dubai101-tr';
var HowtoPageTR = (function () {
    function HowtoPageTR() {
        this.Dubai101PageTR = Dubai101PageTR;
    }
    HowtoPageTR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return HowtoPageTR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], HowtoPageTR.prototype, "content", void 0);
HowtoPageTR = __decorate([
    Component({
        selector: 'page-dubai101',
        templateUrl: 'howto-tr.html'
    }),
    __metadata("design:paramtypes", [])
], HowtoPageTR);
export { HowtoPageTR };
//# sourceMappingURL=howto-tr.js.map