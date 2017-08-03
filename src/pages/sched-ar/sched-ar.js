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
import { Dubai101PageAR } from '../dubai101-ar/dubai101-ar';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
var SchedPageAR = (function () {
    function SchedPageAR() {
        this.Dubai101PageAR = Dubai101PageAR;
        this.TheSpeakersPageAR = TheSpeakersPageAR;
    }
    SchedPageAR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return SchedPageAR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], SchedPageAR.prototype, "content", void 0);
SchedPageAR = __decorate([
    Component({
        selector: 'page-sched',
        templateUrl: 'sched-ar.html'
    }),
    __metadata("design:paramtypes", [])
], SchedPageAR);
export { SchedPageAR };
//# sourceMappingURL=sched-ar.js.map