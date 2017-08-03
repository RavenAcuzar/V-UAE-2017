var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPageRU } from '../news-ru/news-ru';
var NewsPageRUModule = (function () {
    function NewsPageRUModule() {
    }
    return NewsPageRUModule;
}());
NewsPageRUModule = __decorate([
    NgModule({
        declarations: [
            NewsPageRU,
        ],
        imports: [
            IonicPageModule.forChild(NewsPageRU),
        ],
        exports: [
            NewsPageRU
        ]
    })
], NewsPageRUModule);
export { NewsPageRUModule };
//# sourceMappingURL=news-ru.module.js.map