import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MerchandisePage } from '../merchandise/merchandise';
import { DownloadsPage } from '../downloads/downloads';
import { FileChooser } from "@ionic-native/file-chooser";
import { Http } from "@angular/http";

@Component({
  selector: 'page-mark',
  templateUrl: 'mark.html'
})
export class MarkPage {

  DownloadsPage = DownloadsPage;
  MerchandisePage = MerchandisePage;

  constructor(private fileChooser: FileChooser, private http: Http) {
    
  }

  chooseImage() {
    this.fileChooser.open().then(uri => {
      
    }, e => {

    })
  }
}
