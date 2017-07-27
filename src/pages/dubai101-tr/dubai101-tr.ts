import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WhattoPageTR } from '../whatto-tr/whatto-tr';
import { WheretoPageTR } from '../whereto-tr/whereto-tr';
import { HowtoPageTR } from '../howto-tr/howto-tr';
import { SchedPageTR } from '../sched-tr/sched-tr';
import { MerchandisePageTR } from '../merchandise-tr/merchandise-tr';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'dubai101-tr.html'
})
export class Dubai101PageTR {
MerchandisePageTR = MerchandisePageTR;
SchedPageTR = SchedPageTR;
HowtoPageTR = HowtoPageTR;
WheretoPageTR = WheretoPageTR;
WhattoPageTR = WhattoPageTR;
  constructor() {}

}
