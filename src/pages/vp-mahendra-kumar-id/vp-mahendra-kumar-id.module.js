var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VPmkPageID } from '../vp-mahendra-kumar-id/vp-mahendra-kumar-id';
var VPmkPageIDModule = (function () {
    function VPmkPageIDModule() {
    }
    return VPmkPageIDModule;
}());
VPmkPageIDModule = __decorate([
    NgModule({
        declarations: [
            VPmkPageID,
        ],
        imports: [
            IonicPageModule.forChild(VPmkPageID),
        ],
        exports: [
            VPmkPageID
        ]
    })
], VPmkPageIDModule);
export { VPmkPageIDModule };
//# sourceMappingURL=vp-mahendra-kumar-id.module.js.map