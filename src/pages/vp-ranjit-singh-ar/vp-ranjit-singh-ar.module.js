var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPrsPageAR } from '../vp-ranjit-singh-ar/vp-ranjit-singh-ar';
var VPrsPageARModule = (function () {
    function VPrsPageARModule() {
    }
    return VPrsPageARModule;
}());
VPrsPageARModule = __decorate([
    NgModule({
        declarations: [
            VPrsPageAR,
        ],
        imports: [
            IonicPageModule.forChild(VPrsPageAR),
        ],
        exports: [
            VPrsPageAR
        ]
    })
], VPrsPageARModule);
export { VPrsPageARModule };
//# sourceMappingURL=vp-ranjit-singh-ar.module.js.map