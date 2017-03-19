import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReadingPage } from '../reading/reading';

@Component({
  selector: 'page-book-details',
  templateUrl: 'book-details.html'
})
export class BookDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  }

  readBook()
  {
   this.navCtrl.push(ReadingPage);
  }
}
