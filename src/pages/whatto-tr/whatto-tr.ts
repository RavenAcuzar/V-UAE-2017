import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageTR } from '../dubai101-tr/dubai101-tr';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'whatto-tr.html'
})
export class WhattoPageTR {
  Dubai101PageTR = Dubai101PageTR;
  constructor() {

  }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
