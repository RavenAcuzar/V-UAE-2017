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
import { WhattoPageRU } from '../whatto-ru/whatto-ru';
import { WheretoPageRU } from '../whereto-ru/whereto-ru';
import { HowtoPageRU } from '../howto-ru/howto-ru';
import { SchedPageRU } from '../sched-ru/sched-ru';
import { MerchandisePageRU } from '../merchandise-ru/merchandise-ru';
var Dubai101PageRU = (function () {
    function Dubai101PageRU() {
        this.MerchandisePageRU = MerchandisePageRU;
        this.SchedPageRU = SchedPageRU;
        this.HowtoPageRU = HowtoPageRU;
        this.WheretoPageRU = WheretoPageRU;
        this.WhattoPageRU = WhattoPageRU;
    }
    return Dubai101PageRU;
}());
Dubai101PageRU = __decorate([
    Component({
        selector: 'page-dubai101',
        templateUrl: 'dubai101-ru.html'
    }),
    __metadata("design:paramtypes", [])
], Dubai101PageRU);
export { Dubai101PageRU };
//# sourceMappingURL=dubai101-ru.js.map