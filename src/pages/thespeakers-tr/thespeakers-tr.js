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
import { VFPPageTR } from '../vfp-joseph-bismark-tr/vfp-joseph-bismark-tr';
import { VMPPageTR } from '../vmp-dato-sri-vijay-eswaran-tr/vmp-dato-sri-vijay-eswaran-tr';
import { VPahPageTR } from '../vp-adly-hassan-tr/vp-adly-hassan-tr';
import { VPagPageTR } from '../vp-arun-george-tr/vp-arun-george-tr';
import { VPcmPageTR } from '../vp-cherian-mathew-tr/vp-cherian-mathew-tr';
import { VPdsPageTR } from '../vp-david-sharma-tr/vp-david-sharma-tr';
import { VPdjPageTR } from '../vp-dev-johl-tr/vp-dev-johl-tr';
import { VPdwPageTR } from '../vp-dev-wadhwani-tr/vp-dev-wadhwani-tr';
import { VPdiPageTR } from '../vp-donna-imson-tr/vp-donna-imson-tr';
import { VPmqPageTR } from '../vp-dr-motaz-qais-tr/vp-dr-motaz-qais-tr';
import { VPftPageTR } from '../vp-ferdie-tolentino-tr/vp-ferdie-tolentino-tr';
import { VPhnPageTR } from '../vp-hendra-nilam-tr/vp-hendra-nilam-tr';
import { VPkpPageTR } from '../vp-kpadma-tr/vp-kpadma-tr';
import { VPksPageTR } from '../vp-kuna-senathirajah-tr/vp-kuna-senathirajah-tr';
import { VPmkPageTR } from '../vp-mahendra-kumar-tr/vp-mahendra-kumar-tr';
import { VPpsPageTR } from '../vp-pathman-senathirajah-tr/vp-pathman-senathirajah-tr';
import { VPrsPageTR } from '../vp-ranjit-singh-tr/vp-ranjit-singh-tr';
import { VPssPageTR } from '../vp-sathi-senathirajah-tr/vp-sathi-senathirajah-tr';
import { VPtgPageTR } from '../vp-tg-kintanar-tr/vp-tg-kintanar-tr';
import { NewslandingPageTR } from '../newslanding-tr/newslanding-tr';
import { SchedPageTR } from '../sched-tr/sched-tr';
var TheSpeakersPageTR = (function () {
    function TheSpeakersPageTR() {
        this.NewslandingPageTR = NewslandingPageTR;
        this.SchedPageTR = SchedPageTR;
        this.VFPPageTR = VFPPageTR;
        this.VMPPageTR = VMPPageTR;
        this.VPahPageTR = VPahPageTR;
        this.VPagPageTR = VPagPageTR;
        this.VPcmPageTR = VPcmPageTR;
        this.VPdsPageTR = VPdsPageTR;
        this.VPdjPageTR = VPdjPageTR;
        this.VPdwPageTR = VPdwPageTR;
        this.VPdiPageTR = VPdiPageTR;
        this.VPmqPageTR = VPmqPageTR;
        this.VPftPageTR = VPftPageTR;
        this.VPhnPageTR = VPhnPageTR;
        this.VPkpPageTR = VPkpPageTR;
        this.VPksPageTR = VPksPageTR;
        this.VPmkPageTR = VPmkPageTR;
        this.VPpsPageTR = VPpsPageTR;
        this.VPrsPageTR = VPrsPageTR;
        this.VPssPageTR = VPssPageTR;
        this.VPtgPageTR = VPtgPageTR;
    }
    TheSpeakersPageTR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    TheSpeakersPageTR.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TheSpeakersPage');
    };
    return TheSpeakersPageTR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], TheSpeakersPageTR.prototype, "content", void 0);
TheSpeakersPageTR = __decorate([
    Component({
        selector: 'page-thespeakers',
        templateUrl: 'thespeakers-tr.html'
    }),
    __metadata("design:paramtypes", [])
], TheSpeakersPageTR);
export { TheSpeakersPageTR };
//# sourceMappingURL=thespeakers-tr.js.map