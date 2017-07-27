import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WhattoPageID } from '../whatto-id/whatto-id';
import { WheretoPageID } from '../whereto-id/whereto-id';
import { HowtoPageID } from '../howto-id/howto-id';
import { SchedPageID } from '../sched-id/sched-id';
import { MerchandisePageID } from '../merchandise-id/merchandise-id';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'dubai101-id.html'
})
export class Dubai101PageID {
MerchandisePageID = MerchandisePageID;
SchedPageID = SchedPageID;
HowtoPageID = HowtoPageID;
WheretoPageID = WheretoPageID;
WhattoPageID = WhattoPageID;
  constructor() {}

}
