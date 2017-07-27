import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WhattoPageFR } from '../whatto-fr/whatto-fr';
import { WheretoPageFR } from '../whereto-fr/whereto-fr';
import { HowtoPageFR } from '../howto-fr/howto-fr';
import { SchedPageFR } from '../sched-fr/sched-fr';
import { MerchandisePageFR } from '../merchandise-fr/merchandise-fr';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'dubai101-fr.html'
})
export class Dubai101PageFR {
MerchandisePageFR = MerchandisePageFR;
SchedPageFR = SchedPageFR;
HowtoPageFR = HowtoPageFR;
WheretoPageFR = WheretoPageFR;
WhattoPageFR = WhattoPageFR;
  constructor() {}
}
