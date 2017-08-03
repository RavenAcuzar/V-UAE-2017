var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dubai101PageAR } from "./dubai101-ar";
import { Dubai101PageTR } from "../dubai101-tr/dubai101-tr";
import { Dubai101PageRU } from "../dubai101-ru/dubai101-ru";
import { Dubai101PageID } from "../dubai101-id/dubai101-id";
import { Dubai101PageFR } from "../dubai101-fr/dubai101-fr";
var Dubai101PageARModule = (function () {
    function Dubai101PageARModule() {
    }
    return Dubai101PageARModule;
}());
Dubai101PageARModule = __decorate([
    NgModule({
        declarations: [Dubai101PageAR],
        imports: [IonicPageModule.forChild(Dubai101PageAR)],
        exports: [Dubai101PageAR]
    })
], Dubai101PageARModule);
export { Dubai101PageARModule };
var Dubai101PageFRModule = (function () {
    function Dubai101PageFRModule() {
    }
    return Dubai101PageFRModule;
}());
Dubai101PageFRModule = __decorate([
    NgModule({
        declarations: [Dubai101PageFR],
        imports: [IonicPageModule.forChild(Dubai101PageFR)],
        exports: [Dubai101PageFR]
    })
], Dubai101PageFRModule);
export { Dubai101PageFRModule };
var Dubai101PageIDModule = (function () {
    function Dubai101PageIDModule() {
    }
    return Dubai101PageIDModule;
}());
Dubai101PageIDModule = __decorate([
    NgModule({
        declarations: [Dubai101PageID],
        imports: [IonicPageModule.forChild(Dubai101PageID)],
        exports: [Dubai101PageID]
    })
], Dubai101PageIDModule);
export { Dubai101PageIDModule };
var Dubai101PageRUModule = (function () {
    function Dubai101PageRUModule() {
    }
    return Dubai101PageRUModule;
}());
Dubai101PageRUModule = __decorate([
    NgModule({
        declarations: [Dubai101PageRU],
        imports: [IonicPageModule.forChild(Dubai101PageRU)],
        exports: [Dubai101PageRU]
    })
], Dubai101PageRUModule);
export { Dubai101PageRUModule };
var Dubai101PageTRModule = (function () {
    function Dubai101PageTRModule() {
    }
    return Dubai101PageTRModule;
}());
Dubai101PageTRModule = __decorate([
    NgModule({
        declarations: [Dubai101PageTR],
        imports: [IonicPageModule.forChild(Dubai101PageTR)],
        exports: [Dubai101PageTR]
    })
], Dubai101PageTRModule);
export { Dubai101PageTRModule };
//# sourceMappingURL=dubai101.module.js.map