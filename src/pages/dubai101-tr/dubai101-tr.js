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
import { WhattoPageTR } from '../whatto-tr/whatto-tr';
import { WheretoPageTR } from '../whereto-tr/whereto-tr';
import { HowtoPageTR } from '../howto-tr/howto-tr';
import { SchedPageTR } from '../sched-tr/sched-tr';
import { MerchandisePageTR } from '../merchandise-tr/merchandise-tr';
var Dubai101PageTR = (function () {
    function Dubai101PageTR() {
        this.MerchandisePageTR = MerchandisePageTR;
        this.SchedPageTR = SchedPageTR;
        this.HowtoPageTR = HowtoPageTR;
        this.WheretoPageTR = WheretoPageTR;
        this.WhattoPageTR = WhattoPageTR;
    }
    return Dubai101PageTR;
}());
Dubai101PageTR = __decorate([
    Component({
        selector: 'page-dubai101',
        templateUrl: 'dubai101-tr.html'
    }),
    __metadata("design:paramtypes", [])
], Dubai101PageTR);
export { Dubai101PageTR };
//# sourceMappingURL=dubai101-tr.js.map