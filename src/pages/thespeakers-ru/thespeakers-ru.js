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
import { VFPPageRU } from '../vfp-joseph-bismark-ru/vfp-joseph-bismark-ru';
import { VMPPageRU } from '../vmp-dato-sri-vijay-eswaran-ru/vmp-dato-sri-vijay-eswaran-ru';
import { VPahPageRU } from '../vp-adly-hassan-ru/vp-adly-hassan-ru';
import { VPagPageRU } from '../vp-arun-george-ru/vp-arun-george-ru';
import { VPcmPageRU } from '../vp-cherian-mathew-ru/vp-cherian-mathew-ru';
import { VPdsPageRU } from '../vp-david-sharma-ru/vp-david-sharma-ru';
import { VPdjPageRU } from '../vp-dev-johl-ru/vp-dev-johl-ru';
import { VPdwPageRU } from '../vp-dev-wadhwani-ru/vp-dev-wadhwani-ru';
import { VPdiPageRU } from '../vp-donna-imson-ru/vp-donna-imson-ru';
import { VPmqPageRU } from '../vp-dr-motaz-qais-ru/vp-dr-motaz-qais-ru';
import { VPftPageRU } from '../vp-ferdie-tolentino-ru/vp-ferdie-tolentino-ru';
import { VPhnPageRU } from '../vp-hendra-nilam-ru/vp-hendra-nilam-ru';
import { VPkpPageRU } from '../vp-kpadma-ru/vp-kpadma-ru';
import { VPksPageRU } from '../vp-kuna-senathirajah-ru/vp-kuna-senathirajah-ru';
import { VPmkPageRU } from '../vp-mahendra-kumar-ru/vp-mahendra-kumar-ru';
import { VPpsPageRU } from '../vp-pathman-senathirajah-ru/vp-pathman-senathirajah-ru';
import { VPrsPageRU } from '../vp-ranjit-singh-ru/vp-ranjit-singh-ru';
import { VPssPageRU } from '../vp-sathi-senathirajah-ru/vp-sathi-senathirajah-ru';
import { VPtgPageRU } from '../vp-tg-kintanar-ru/vp-tg-kintanar-ru';
import { NewslandingPageRU } from '../newslanding-ru/newslanding-ru';
import { SchedPageRU } from '../sched-ru/sched-ru';
var TheSpeakersPageRU = (function () {
    function TheSpeakersPageRU() {
        this.NewslandingPageRU = NewslandingPageRU;
        this.SchedPageRU = SchedPageRU;
        this.VFPPageRU = VFPPageRU;
        this.VMPPageRU = VMPPageRU;
        this.VPahPageRU = VPahPageRU;
        this.VPagPageRU = VPagPageRU;
        this.VPcmPageRU = VPcmPageRU;
        this.VPdsPageRU = VPdsPageRU;
        this.VPdjPageRU = VPdjPageRU;
        this.VPdwPageRU = VPdwPageRU;
        this.VPdiPageRU = VPdiPageRU;
        this.VPmqPageRU = VPmqPageRU;
        this.VPftPageRU = VPftPageRU;
        this.VPhnPageRU = VPhnPageRU;
        this.VPkpPageRU = VPkpPageRU;
        this.VPksPageRU = VPksPageRU;
        this.VPmkPageRU = VPmkPageRU;
        this.VPpsPageRU = VPpsPageRU;
        this.VPrsPageRU = VPrsPageRU;
        this.VPssPageRU = VPssPageRU;
        this.VPtgPageRU = VPtgPageRU;
    }
    TheSpeakersPageRU.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    TheSpeakersPageRU.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TheSpeakersPage');
    };
    return TheSpeakersPageRU;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], TheSpeakersPageRU.prototype, "content", void 0);
TheSpeakersPageRU = __decorate([
    Component({
        selector: 'page-thespeakers',
        templateUrl: 'thespeakers-ru.html'
    }),
    __metadata("design:paramtypes", [])
], TheSpeakersPageRU);
export { TheSpeakersPageRU };
//# sourceMappingURL=thespeakers-ru.js.map