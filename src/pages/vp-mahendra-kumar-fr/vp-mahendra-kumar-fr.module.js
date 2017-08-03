var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmkPageFR } from '../vp-mahendra-kumar-fr/vp-mahendra-kumar-fr';
var VPmkPageFRModule = (function () {
    function VPmkPageFRModule() {
    }
    return VPmkPageFRModule;
}());
VPmkPageFRModule = __decorate([
    NgModule({
        declarations: [
            VPmkPageFR,
        ],
        imports: [
            IonicPageModule.forChild(VPmkPageFR),
        ],
        exports: [
            VPmkPageFR
        ]
    })
], VPmkPageFRModule);
export { VPmkPageFRModule };
//# sourceMappingURL=vp-mahendra-kumar-fr.module.js.map