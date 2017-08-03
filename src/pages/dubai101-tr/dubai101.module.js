var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
var Dubai101PageModule = (function () {
    function Dubai101PageModule() {
    }
    return Dubai101PageModule;
}());
Dubai101PageModule = __decorate([
    NgModule({
        declarations: [
            Dubai101Page,
        ],
        imports: [
            IonicPageModule.forChild(Dubai101Page),
        ],
        exports: [
            Dubai101Page
        ]
    })
], Dubai101PageModule);
export { Dubai101PageModule };
//# sourceMappingURL=dubai101.module.js.map