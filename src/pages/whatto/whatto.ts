import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'whatto.html'
})
export class WhattoPage {
  Dubai101Page = Dubai101Page;
  constructor() {

  }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
