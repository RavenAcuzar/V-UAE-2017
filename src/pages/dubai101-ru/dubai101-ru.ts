import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WhattoPageRU } from '../whatto-ru/whatto-ru';
import { WheretoPageRU } from '../whereto-ru/whereto-ru';
import { HowtoPageRU } from '../howto-ru/howto-ru';
import { SchedPageRU } from '../sched-ru/sched-ru';
import { MerchandisePageRU } from '../merchandise-ru/merchandise-ru';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'dubai101-ru.html'
})
export class Dubai101PageRU {
MerchandisePageRU = MerchandisePageRU;
SchedPageRU = SchedPageRU;
HowtoPageRU = HowtoPageRU;
WheretoPageRU = WheretoPageRU;
WhattoPageRU = WhattoPageRU;
  constructor() {}

}
