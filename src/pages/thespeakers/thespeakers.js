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
import { VFPPage } from '../vfp-joseph-bismark/vfp-joseph-bismark';
import { VMPPage } from '../vmp-dato-sri-vijay-eswaran/vmp-dato-sri-vijay-eswaran';
import { VPahPage } from '../vp-adly-hassan/vp-adly-hassan';
import { VPagPage } from '../vp-arun-george/vp-arun-george';
import { VPcmPage } from '../vp-cherian-mathew/vp-cherian-mathew';
import { VPdsPage } from '../vp-david-sharma/vp-david-sharma';
import { VPdjPage } from '../vp-dev-johl/vp-dev-johl';
import { VPdwPage } from '../vp-dev-wadhwani/vp-dev-wadhwani';
import { VPdiPage } from '../vp-donna-imson/vp-donna-imson';
import { VPmqPage } from '../vp-dr-motaz-qais/vp-dr-motaz-qais';
import { VPftPage } from '../vp-ferdie-tolentino/vp-ferdie-tolentino';
import { VPhnPage } from '../vp-hendra-nilam/vp-hendra-nilam';
import { VPkpPage } from '../vp-kpadma/vp-kpadma';
import { VPksPage } from '../vp-kuna-senathirajah/vp-kuna-senathirajah';
import { VPmkPage } from '../vp-mahendra-kumar/vp-mahendra-kumar';
import { VPpsPage } from '../vp-pathman-senathirajah/vp-pathman-senathirajah';
import { VPrsPage } from '../vp-ranjit-singh/vp-ranjit-singh';
import { VPssPage } from '../vp-sathi-senathirajah/vp-sathi-senathirajah';
import { VPtgPage } from '../vp-tg-kintanar/vp-tg-kintanar';
import { NewslandingPage } from '../newslanding/newslanding';
import { SchedPage } from '../sched/sched';
var TheSpeakersPage = (function () {
    function TheSpeakersPage() {
        this.NewslandingPage = NewslandingPage;
        this.SchedPage = SchedPage;
        this.VFPPage = VFPPage;
        this.VMPPage = VMPPage;
        this.VPahPage = VPahPage;
        this.VPagPage = VPagPage;
        this.VPcmPage = VPcmPage;
        this.VPdsPage = VPdsPage;
        this.VPdjPage = VPdjPage;
        this.VPdwPage = VPdwPage;
        this.VPdiPage = VPdiPage;
        this.VPmqPage = VPmqPage;
        this.VPftPage = VPftPage;
        this.VPhnPage = VPhnPage;
        this.VPkpPage = VPkpPage;
        this.VPksPage = VPksPage;
        this.VPmkPage = VPmkPage;
        this.VPpsPage = VPpsPage;
        this.VPrsPage = VPrsPage;
        this.VPssPage = VPssPage;
        this.VPtgPage = VPtgPage;
    }
    TheSpeakersPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    TheSpeakersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TheSpeakersPage');
    };
    return TheSpeakersPage;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], TheSpeakersPage.prototype, "content", void 0);
TheSpeakersPage = __decorate([
    Component({
        selector: 'page-thespeakers',
        templateUrl: 'thespeakers.html'
    }),
    __metadata("design:paramtypes", [])
], TheSpeakersPage);
export { TheSpeakersPage };
//# sourceMappingURL=thespeakers.js.map