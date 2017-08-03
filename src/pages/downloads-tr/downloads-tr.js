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
import { NavController } from 'ionic-angular';
import { MarkPageTR } from '../mark-tr/mark-tr';
import { FaqsPageTR } from '../faqs-tr/faqs-tr';
var DownloadsPageTR = (function () {
    function DownloadsPageTR(navCtrl) {
        this.navCtrl = navCtrl;
        this.FaqsPageTR = FaqsPageTR;
        this.MarkPageTR = MarkPageTR;
    }
    return DownloadsPageTR;
}());
DownloadsPageTR = __decorate([
    Component({
        selector: 'page-download',
        templateUrl: 'downloads-tr.html'
    }),
    __metadata("design:paramtypes", [NavController])
], DownloadsPageTR);
export { DownloadsPageTR };
//# sourceMappingURL=downloads-tr.js.map