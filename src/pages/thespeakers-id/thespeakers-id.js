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
import { VFPPageID } from '../vfp-joseph-bismark-id/vfp-joseph-bismark-id';
import { VMPPageID } from '../vmp-dato-sri-vijay-eswaran-id/vmp-dato-sri-vijay-eswaran-id';
import { VPahPageID } from '../vp-adly-hassan-id/vp-adly-hassan-id';
import { VPagPageID } from '../vp-arun-george-id/vp-arun-george-id';
import { VPcmPageID } from '../vp-cherian-mathew-id/vp-cherian-mathew-id';
import { VPdsPageID } from '../vp-david-sharma-id/vp-david-sharma-id';
import { VPdjPageID } from '../vp-dev-johl-id/vp-dev-johl-id';
import { VPdwPageID } from '../vp-dev-wadhwani-id/vp-dev-wadhwani-id';
import { VPdiPageID } from '../vp-donna-imson-id/vp-donna-imson-id';
import { VPmqPageID } from '../vp-dr-motaz-qais-id/vp-dr-motaz-qais-id';
import { VPftPageID } from '../vp-ferdie-tolentino-id/vp-ferdie-tolentino-id';
import { VPhnPageID } from '../vp-hendra-nilam-id/vp-hendra-nilam-id';
import { VPkpPageID } from '../vp-kpadma-id/vp-kpadma-id';
import { VPksPageID } from '../vp-kuna-senathirajah-id/vp-kuna-senathirajah-id';
import { VPmkPageID } from '../vp-mahendra-kumar-id/vp-mahendra-kumar-id';
import { VPpsPageID } from '../vp-pathman-senathirajah-id/vp-pathman-senathirajah-id';
import { VPrsPageID } from '../vp-ranjit-singh-id/vp-ranjit-singh-id';
import { VPssPageID } from '../vp-sathi-senathirajah-id/vp-sathi-senathirajah-id';
import { VPtgPageID } from '../vp-tg-kintanar-id/vp-tg-kintanar-id';
import { NewslandingPageID } from '../newslanding-id/newslanding-id';
import { SchedPageID } from '../sched-id/sched-id';
var TheSpeakersPageID = (function () {
    function TheSpeakersPageID() {
        this.NewslandingPageID = NewslandingPageID;
        this.SchedPageID = SchedPageID;
        this.VFPPageID = VFPPageID;
        this.VMPPageID = VMPPageID;
        this.VPahPageID = VPahPageID;
        this.VPagPageID = VPagPageID;
        this.VPcmPageID = VPcmPageID;
        this.VPdsPageID = VPdsPageID;
        this.VPdjPageID = VPdjPageID;
        this.VPdwPageID = VPdwPageID;
        this.VPdiPageID = VPdiPageID;
        this.VPmqPageID = VPmqPageID;
        this.VPftPageID = VPftPageID;
        this.VPhnPageID = VPhnPageID;
        this.VPkpPageID = VPkpPageID;
        this.VPksPageID = VPksPageID;
        this.VPmkPageID = VPmkPageID;
        this.VPpsPageID = VPpsPageID;
        this.VPrsPageID = VPrsPageID;
        this.VPssPageID = VPssPageID;
        this.VPtgPageID = VPtgPageID;
    }
    TheSpeakersPageID.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    TheSpeakersPageID.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TheSpeakersPage');
    };
    return TheSpeakersPageID;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], TheSpeakersPageID.prototype, "content", void 0);
TheSpeakersPageID = __decorate([
    Component({
        selector: 'page-thespeakers',
        templateUrl: 'thespeakers-id.html'
    }),
    __metadata("design:paramtypes", [])
], TheSpeakersPageID);
export { TheSpeakersPageID };
//# sourceMappingURL=thespeakers-id.js.map