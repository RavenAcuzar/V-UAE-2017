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
import { Dubai101PageFR } from '../dubai101-fr/dubai101-fr';
var HowtoPageFR = (function () {
    function HowtoPageFR() {
        this.Dubai101PageFR = Dubai101PageFR;
    }
    HowtoPageFR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return HowtoPageFR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], HowtoPageFR.prototype, "content", void 0);
HowtoPageFR = __decorate([
    Component({
        selector: 'page-dubai101',
        templateUrl: 'howto-fr.html'
    }),
    __metadata("design:paramtypes", [])
], HowtoPageFR);
export { HowtoPageFR };
//# sourceMappingURL=howto-fr.js.map