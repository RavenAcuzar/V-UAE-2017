var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { DownloadsPage } from "./downloads";
import { IonicPageModule } from "ionic-angular";
import { DownloadsPageTR } from "../downloads-tr/downloads-tr";
import { DownloadsPageRU } from "../downloads-ru/downloads-ru";
import { DownloadsPageID } from "../downloads-id/downloads-id";
import { DownloadsPageFR } from "../downloads-fr/downloads-fr";
import { DownloadsPageAR } from "../downloads-ar/downloads-ar";
var DownloadsPageModule = (function () {
    function DownloadsPageModule() {
    }
    return DownloadsPageModule;
}());
DownloadsPageModule = __decorate([
    NgModule({
        declarations: [
            DownloadsPage,
            DownloadsPageAR,
            DownloadsPageFR,
            DownloadsPageID,
            DownloadsPageRU,
            DownloadsPageTR
        ],
        imports: [
            IonicPageModule.forChild(DownloadsPage),
            IonicPageModule.forChild(DownloadsPageAR),
            IonicPageModule.forChild(DownloadsPageFR),
            IonicPageModule.forChild(DownloadsPageID),
            IonicPageModule.forChild(DownloadsPageRU),
            IonicPageModule.forChild(DownloadsPageTR),
        ],
        exports: [
            DownloadsPage,
            DownloadsPageAR,
            DownloadsPageFR,
            DownloadsPageID,
            DownloadsPageRU,
            DownloadsPageTR
        ]
    })
], DownloadsPageModule);
export { DownloadsPageModule };
//# sourceMappingURL=downloads.module.js.map