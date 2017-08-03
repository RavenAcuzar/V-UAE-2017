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
import { Content, NavController } from 'ionic-angular';
import { Dubai101PageID } from '../dubai101-id/dubai101-id';
var WheretoPageID = (function () {
    function WheretoPageID(navCtrl) {
        this.navCtrl = navCtrl;
        this.Dubai101PageID = Dubai101PageID;
    }
    WheretoPageID.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return WheretoPageID;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], WheretoPageID.prototype, "content", void 0);
WheretoPageID = __decorate([
    Component({
        selector: 'page-dubai101',
        templateUrl: 'whereto-id.html'
    }),
    __metadata("design:paramtypes", [NavController])
], WheretoPageID);
export { WheretoPageID };
//# sourceMappingURL=whereto-id.js.map