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
import { WhattoPageFR } from '../whatto-fr/whatto-fr';
import { WheretoPageFR } from '../whereto-fr/whereto-fr';
import { HowtoPageFR } from '../howto-fr/howto-fr';
import { SchedPageFR } from '../sched-fr/sched-fr';
import { MerchandisePageFR } from '../merchandise-fr/merchandise-fr';
var Dubai101PageFR = (function () {
    function Dubai101PageFR() {
        this.MerchandisePageFR = MerchandisePageFR;
        this.SchedPageFR = SchedPageFR;
        this.HowtoPageFR = HowtoPageFR;
        this.WheretoPageFR = WheretoPageFR;
        this.WhattoPageFR = WhattoPageFR;
    }
    return Dubai101PageFR;
}());
Dubai101PageFR = __decorate([
    Component({
        selector: 'page-dubai101',
        templateUrl: 'dubai101-fr.html'
    }),
    __metadata("design:paramtypes", [])
], Dubai101PageFR);
export { Dubai101PageFR };
//# sourceMappingURL=dubai101-fr.js.map