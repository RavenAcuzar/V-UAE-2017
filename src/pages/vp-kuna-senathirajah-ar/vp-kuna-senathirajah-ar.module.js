var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPksPageAR } from '../vp-kuna-senathirajah-ar/vp-kuna-senathirajah-ar';
var VPksPageARModule = (function () {
    function VPksPageARModule() {
    }
    return VPksPageARModule;
}());
VPksPageARModule = __decorate([
    NgModule({
        declarations: [
            VPksPageAR,
        ],
        imports: [
            IonicPageModule.forChild(VPksPageAR),
        ],
        exports: [
            VPksPageAR
        ]
    })
], VPksPageARModule);
export { VPksPageARModule };
//# sourceMappingURL=vp-kuna-senathirajah-ar.module.js.map