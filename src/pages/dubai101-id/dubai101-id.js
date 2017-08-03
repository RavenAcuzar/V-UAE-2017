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
import { WhattoPageID } from '../whatto-id/whatto-id';
import { WheretoPageID } from '../whereto-id/whereto-id';
import { HowtoPageID } from '../howto-id/howto-id';
import { SchedPageID } from '../sched-id/sched-id';
import { MerchandisePageID } from '../merchandise-id/merchandise-id';
var Dubai101PageID = (function () {
    function Dubai101PageID() {
        this.MerchandisePageID = MerchandisePageID;
        this.SchedPageID = SchedPageID;
        this.HowtoPageID = HowtoPageID;
        this.WheretoPageID = WheretoPageID;
        this.WhattoPageID = WhattoPageID;
    }
    return Dubai101PageID;
}());
Dubai101PageID = __decorate([
    Component({
        selector: 'page-dubai101',
        templateUrl: 'dubai101-id.html'
    }),
    __metadata("design:paramtypes", [])
], Dubai101PageID);
export { Dubai101PageID };
//# sourceMappingURL=dubai101-id.js.map