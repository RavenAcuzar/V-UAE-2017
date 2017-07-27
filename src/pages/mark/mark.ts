import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MerchandisePage } from '../merchandise/merchandise';
import { DownloadsPage } from '../downloads/downloads';

@Component({
  selector: 'page-mark',
  templateUrl: 'mark.html'
})
export class MarkPage {

  DownloadsPage = DownloadsPage;
  MerchandisePage = MerchandisePage;
  constructor() {
  }

}
