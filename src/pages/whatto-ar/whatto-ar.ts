import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageAR } from '../dubai101-ar/dubai101-ar';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'whatto-ar.html'
})
export class WhattoPageAR {
  Dubai101PageAR = Dubai101PageAR;
  constructor() {

  }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
