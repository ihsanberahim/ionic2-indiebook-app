import { Component } from '@angular/core';
import { App } from 'ionic-angular';

import { BookDetailsPage } from '../../pages/book-details/book-details';

@Component({
  selector: 'book',
  templateUrl: 'book.html'
})
export class BookComponent {

  constructor(public appCtrl: App) {
    
  }

  openBook() {
    this.appCtrl.getRootNav().push(BookDetailsPage);
  }
}
