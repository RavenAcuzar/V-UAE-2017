import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
import { MarkPage } from '../mark/mark';

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise.html'
})
export class MerchandisePage {
Dubai101Page = Dubai101Page;
MarkPage = MarkPage;
constructor() {}

ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
}

@ViewChild(Content) content: Content;

scrollToTop() {
  this.content.scrollToTop();
}

@ViewChild(Slides) slides: Slides;

autoplay() {}


}
