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
import { VFPPageAR } from '../vfp-joseph-bismark-ar/vfp-joseph-bismark-ar';
import { VMPPageAR } from '../vmp-dato-sri-vijay-eswaran-ar/vmp-dato-sri-vijay-eswaran-ar';
import { VPahPageAR } from '../vp-adly-hassan-ar/vp-adly-hassan-ar';
import { VPagPageAR } from '../vp-arun-george-ar/vp-arun-george-ar';
import { VPcmPageAR } from '../vp-cherian-mathew-ar/vp-cherian-mathew-ar';
import { VPdsPageAR } from '../vp-david-sharma-ar/vp-david-sharma-ar';
import { VPdjPageAR } from '../vp-dev-johl-ar/vp-dev-johl-ar';
import { VPdwPageAR } from '../vp-dev-wadhwani-ar/vp-dev-wadhwani-ar';
import { VPdiPageAR } from '../vp-donna-imson-ar/vp-donna-imson-ar';
import { VPmqPageAR } from '../vp-dr-motaz-qais-ar/vp-dr-motaz-qais-ar';
import { VPftPageAR } from '../vp-ferdie-tolentino-ar/vp-ferdie-tolentino-ar';
import { VPhnPageAR } from '../vp-hendra-nilam-ar/vp-hendra-nilam-ar';
import { VPkpPageAR } from '../vp-kpadma-ar/vp-kpadma-ar';
import { VPksPageAR } from '../vp-kuna-senathirajah-ar/vp-kuna-senathirajah-ar';
import { VPmkPageAR } from '../vp-mahendra-kumar-ar/vp-mahendra-kumar-ar';
import { VPpsPageAR } from '../vp-pathman-senathirajah-ar/vp-pathman-senathirajah-ar';
import { VPrsPageAR } from '../vp-ranjit-singh-ar/vp-ranjit-singh-ar';
import { VPssPageAR } from '../vp-sathi-senathirajah-ar/vp-sathi-senathirajah-ar';
import { VPtgPageAR } from '../vp-tg-kintanar-ar/vp-tg-kintanar-ar';
import { NewslandingPageAR } from '../newslanding-ar/newslanding-ar';
import { SchedPageAR } from '../sched-ar/sched-ar';
var TheSpeakersPageAR = (function () {
    function TheSpeakersPageAR() {
        this.NewslandingPageAR = NewslandingPageAR;
        this.SchedPageAR = SchedPageAR;
        this.VFPPageAR = VFPPageAR;
        this.VMPPageAR = VMPPageAR;
        this.VPahPageAR = VPahPageAR;
        this.VPagPageAR = VPagPageAR;
        this.VPcmPageAR = VPcmPageAR;
        this.VPdsPageAR = VPdsPageAR;
        this.VPdjPageAR = VPdjPageAR;
        this.VPdwPageAR = VPdwPageAR;
        this.VPdiPageAR = VPdiPageAR;
        this.VPmqPageAR = VPmqPageAR;
        this.VPftPageAR = VPftPageAR;
        this.VPhnPageAR = VPhnPageAR;
        this.VPkpPageAR = VPkpPageAR;
        this.VPksPageAR = VPksPageAR;
        this.VPmkPageAR = VPmkPageAR;
        this.VPpsPageAR = VPpsPageAR;
        this.VPrsPageAR = VPrsPageAR;
        this.VPssPageAR = VPssPageAR;
        this.VPtgPageAR = VPtgPageAR;
    }
    TheSpeakersPageAR.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return TheSpeakersPageAR;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], TheSpeakersPageAR.prototype, "content", void 0);
TheSpeakersPageAR = __decorate([
    Component({
        selector: 'page-thespeakers',
        templateUrl: 'thespeakers-ar.html'
    }),
    __metadata("design:paramtypes", [])
], TheSpeakersPageAR);
export { TheSpeakersPageAR };
//# sourceMappingURL=thespeakers-ar.js.map