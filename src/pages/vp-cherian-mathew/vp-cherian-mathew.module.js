var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPcmPage } from '../vp-cherian-mathew/vp-cherian-mathew';
var VPcmPageModule = (function () {
    function VPcmPageModule() {
    }
    return VPcmPageModule;
}());
VPcmPageModule = __decorate([
    NgModule({
        declarations: [
            VPcmPage,
        ],
        imports: [
            IonicPageModule.forChild(VPcmPage),
        ],
        exports: [
            VPcmPage
        ]
    })
], VPcmPageModule);
export { VPcmPageModule };
//# sourceMappingURL=vp-cherian-mathew.module.js.map