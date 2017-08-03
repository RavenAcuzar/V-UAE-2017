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
import { SplashnextPage } from '../splashnext/splashnext';
import { SplashnextPageAR } from '../splashnext-ar/splashnext-ar';
import { SplashnextPageID } from '../splashnext-id/splashnext-id';
import { SplashnextPageFR } from '../splashnext-fr/splashnext-fr';
import { SplashnextPageRU } from '../splashnext-ru/splashnext-ru';
import { SplashnextPageTR } from '../splashnext-tr/splashnext-tr';
var ChangeLangPage = (function () {
    function ChangeLangPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SplashnextPage = SplashnextPage;
        this.SplashnextPageAR = SplashnextPageAR;
        this.SplashnextPageID = SplashnextPageID;
        this.SplashnextPageFR = SplashnextPageFR;
        this.SplashnextPageRU = SplashnextPageRU;
        this.SplashnextPageTR = SplashnextPageTR;
    }
    return ChangeLangPage;
}());
ChangeLangPage = __decorate([
    Component({
        selector: 'page-change',
        templateUrl: 'changelang.html'
    }),
    __metadata("design:paramtypes", [NavController])
], ChangeLangPage);
export { ChangeLangPage };
//# sourceMappingURL=changelang.js.map