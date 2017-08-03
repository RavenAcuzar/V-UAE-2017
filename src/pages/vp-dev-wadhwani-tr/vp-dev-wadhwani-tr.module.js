var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdwPageTR } from '../vp-dev-wadhwani-tr/vp-dev-wadhwani-tr';
var VPdwPageTRModule = (function () {
    function VPdwPageTRModule() {
    }
    return VPdwPageTRModule;
}());
VPdwPageTRModule = __decorate([
    NgModule({
        declarations: [
            VPdwPageTR,
        ],
        imports: [
            IonicPageModule.forChild(VPdwPageTR),
        ],
        exports: [
            VPdwPageTR
        ]
    })
], VPdwPageTRModule);
export { VPdwPageTRModule };
//# sourceMappingURL=vp-dev-wadhwani-tr.module.js.map