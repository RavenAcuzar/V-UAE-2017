import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {Dubai101PageAR} from "./dubai101-ar";
import {Dubai101PageTR} from "../dubai101-tr/dubai101-tr";
import {Dubai101PageRU} from "../dubai101-ru/dubai101-ru";
import {Dubai101PageID} from "../dubai101-id/dubai101-id";
import {Dubai101PageFR} from "../dubai101-fr/dubai101-fr";

@NgModule({
  declarations: [ Dubai101PageAR ],
  imports: [ IonicPageModule.forChild(Dubai101PageAR) ],
  exports: [ Dubai101PageAR ]
})
export class Dubai101PageARModule {}

@NgModule({
  declarations: [ Dubai101PageFR ],
  imports: [ IonicPageModule.forChild(Dubai101PageFR) ],
  exports: [ Dubai101PageFR ]
})
export class Dubai101PageFRModule {}

@NgModule({
  declarations: [ Dubai101PageID ],
  imports: [ IonicPageModule.forChild(Dubai101PageID) ],
  exports: [ Dubai101PageID ]
})
export class Dubai101PageIDModule {}

@NgModule({
  declarations: [ Dubai101PageRU ],
  imports: [ IonicPageModule.forChild(Dubai101PageRU) ],
  exports: [ Dubai101PageRU ]
})
export class Dubai101PageRUModule {}

@NgModule({
  declarations: [ Dubai101PageTR ],
  imports: [ IonicPageModule.forChild(Dubai101PageTR) ],
  exports: [ Dubai101PageTR ]
})
export class Dubai101PageTRModule {}
