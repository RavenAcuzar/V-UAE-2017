var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPdjPage } from '../vp-dev-johl/vp-dev-johl';
var VPdjPageModule = (function () {
    function VPdjPageModule() {
    }
    return VPdjPageModule;
}());
VPdjPageModule = __decorate([
    NgModule({
        declarations: [
            VPdjPage,
        ],
        imports: [
            IonicPageModule.forChild(VPdjPage),
        ],
        exports: [
            VPdjPage
        ]
    })
], VPdjPageModule);
export { VPdjPageModule };
//# sourceMappingURL=vp-dev-johl.module.js.map