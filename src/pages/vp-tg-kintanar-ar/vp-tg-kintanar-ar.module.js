var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPtgPageAR } from '../vp-tg-kintanar-ar/vp-tg-kintanar-ar';
var VPtgPageARModule = (function () {
    function VPtgPageARModule() {
    }
    return VPtgPageARModule;
}());
VPtgPageARModule = __decorate([
    NgModule({
        declarations: [
            VPtgPageAR,
        ],
        imports: [
            IonicPageModule.forChild(VPtgPageAR),
        ],
        exports: [
            VPtgPageAR
        ]
    })
], VPtgPageARModule);
export { VPtgPageARModule };
//# sourceMappingURL=vp-tg-kintanar-ar.module.js.map