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
import { VFPPageFR } from '../vfp-joseph-bismark-fr/vfp-joseph-bismark-fr';
import { VMPPageFR } from '../vmp-dato-sri-vijay-eswaran-fr/vmp-dato-sri-vijay-eswaran-fr';
import { VPahPageFR } from '../vp-adly-hassan-fr/vp-adly-hassan-fr';
import { VPagPageFR } from '../vp-arun-george-fr/vp-arun-george-fr';
import { VPcmPageFR } from '../vp-cherian-mathew-fr/vp-cherian-mathew-fr';
import { VPdsPageFR } from '../vp-david-sharma-fr/vp-david-sharma-fr';
import { VPdjPageFR } from '../vp-dev-johl-fr/vp-dev-johl-fr';
import { VPdwPageFR } from '../vp-dev-wadhwani-fr/vp-dev-wadhwani-fr';
import { VPdiPageFR } from '../vp-donna-imson-fr/vp-donna-imson-fr';
import { VPmqPageFR } from '../vp-dr-motaz-qais-fr/vp-dr-motaz-qais-fr';
import { VPftPageFR } from '../vp-ferdie-tolentino-fr/vp-ferdie-tolentino-fr';
import { VPhnPageFR } from '../vp-hendra-nilam-fr/vp-hendra-nilam-fr';
import { VPkpPageFR } from '../vp-kpadma-fr/vp-kpadma-fr';
import { VPksPageFR } from '../vp-kuna-senathirajah-fr/vp-kuna-senathirajah-fr';
import { VPmkPageFR } from '../vp-mahendra-kumar-fr/vp-mahendra-kumar-fr';
import { VPpsPageFR } from '../vp-pathman-senathirajah-fr/vp-pathman-senathirajah-fr';
import { VPrsPageFR } from '../vp-ranjit-singh-fr/vp-ranjit-singh-fr';
import { VPssPageFR } from '../vp-sathi-senathirajah-fr/vp-sathi-senathirajah-fr';
import { VPtgPageFR } from '../vp-tg-kintanar-fr/vp-tg-kintanar-fr';
import { NewslandingPageFR } from '../newslanding-fr/newslanding-fr';
import { SchedPageFR } from '../sched-fr/sched-fr';
var TheSpeakersPageFR = (function () {
    function TheSpeakersPageFR() {
        this.NewslandingPageFR = NewslandingPageFR;
        this.SchedPageFR = SchedPageFR;
        this.VFPPageFR = VFPPageFR;
        this.VMPPageFR = VMPPageFR;
        this.VPahPageFR = VPahPageFR;
        this.VPagPageFR = VPagPageFR;
        this.VPcmPageFR = VPcmPageFR;
        this.VPdsPageFR = VPdsPageFR;
        this.VPdjPageFR = VPdjPageFR;
        this.VPdwPageFR = VPdwPageFR;
        this.VPdiPageFR = VPdiPageFR;
        this.VPmqPageFR = VPmqPageFR;
        this.VPftPageFR = VPftPageFR;
        this.VPhnPageFR = VPhnPageFR;
        this.VPkpPageFR = VPkpPageFR;
        this.VPksPageFR = VPksPageFR;
        this.VPmkPageFR = VPmkPageFR;
        this.VPpsPageFR = VPpsPageFR;
        this.VPrsPageFR = VPrsPageFR;
        this.VPssPageFR = VPssPageFR;
        this.VPtgPageFR = VPtgPageFR;
    }
    TheSpeakersPageFR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    TheSpeakersPageFR.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TheSpeakersPage');
    };
    return TheSpeakersPageFR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], TheSpeakersPageFR.prototype, "content", void 0);
TheSpeakersPageFR = __decorate([
    Component({
        selector: 'page-thespeakers',
        templateUrl: 'thespeakers-fr.html'
    }),
    __metadata("design:paramtypes", [])
], TheSpeakersPageFR);
export { TheSpeakersPageFR };
//# sourceMappingURL=thespeakers-fr.js.map