import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WhattoPageAR } from '../whatto-ar/whatto-ar';
import { WheretoPageAR } from '../whereto-ar/whereto-ar';
import { HowtoPageAR } from '../howto-ar/howto-ar';
import { SchedPageAR } from '../sched-ar/sched-ar';
import { MerchandisePageAR } from '../merchandise-ar/merchandise-ar';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'dubai101-ar.html'
})
export class Dubai101PageAR {
MerchandisePageAR = MerchandisePageAR;
SchedPageAR = SchedPageAR;
HowtoPageAR = HowtoPageAR;
WheretoPageAR = WheretoPageAR;
WhattoPageAR = WhattoPageAR;
  constructor() {}

}
