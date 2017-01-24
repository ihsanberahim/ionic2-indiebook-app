import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BookPreviewPage } from '../book-preview/book-preview';

@Component({
  selector: 'page-publish-a-book',
  templateUrl: 'publish-a-book.html'
})
export class PublishABookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
  }

  previewBook(){
    this.navCtrl.push(BookPreviewPage);
  }
}
