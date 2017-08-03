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
import { WhattoPageAR } from '../whatto-ar/whatto-ar';
import { WheretoPageAR } from '../whereto-ar/whereto-ar';
import { HowtoPageAR } from '../howto-ar/howto-ar';
import { SchedPageAR } from '../sched-ar/sched-ar';
import { MerchandisePageAR } from '../merchandise-ar/merchandise-ar';
var Dubai101PageAR = (function () {
    function Dubai101PageAR() {
        this.MerchandisePageAR = MerchandisePageAR;
        this.SchedPageAR = SchedPageAR;
        this.HowtoPageAR = HowtoPageAR;
        this.WheretoPageAR = WheretoPageAR;
        this.WhattoPageAR = WhattoPageAR;
    }
    return Dubai101PageAR;
}());
Dubai101PageAR = __decorate([
    Component({
        selector: 'page-dubai101',
        templateUrl: 'dubai101-ar.html'
    }),
    __metadata("design:paramtypes", [])
], Dubai101PageAR);
export { Dubai101PageAR };
//# sourceMappingURL=dubai101-ar.js.map