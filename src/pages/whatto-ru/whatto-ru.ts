import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'whatto-ru.html'
})
export class WhattoPageRU {
  Dubai101PageRU = Dubai101PageRU;
  constructor() {

  }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}
