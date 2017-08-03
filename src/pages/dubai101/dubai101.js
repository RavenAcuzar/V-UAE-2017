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
import { WhattoPage } from '../whatto/whatto';
import { WheretoPage } from '../whereto/whereto';
import { HowtoPage } from '../howto/howto';
import { SchedPage } from '../sched/sched';
import { MerchandisePage } from '../merchandise/merchandise';
var Dubai101Page = (function () {
    function Dubai101Page() {
        this.MerchandisePage = MerchandisePage;
        this.SchedPage = SchedPage;
        this.HowtoPage = HowtoPage;
        this.WheretoPage = WheretoPage;
        this.WhattoPage = WhattoPage;
    }
    return Dubai101Page;
}());
Dubai101Page = __decorate([
    Component({
        selector: 'page-dubai101',
        templateUrl: 'dubai101.html'
    }),
    __metadata("design:paramtypes", [])
], Dubai101Page);
export { Dubai101Page };
//# sourceMappingURL=dubai101.js.map