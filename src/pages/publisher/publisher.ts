import { Component } from '@angular/core';
import { NavController, NavParams, MenuController} from 'ionic-angular';

import { PublishABookPage } from '../publish-a-book/publish-a-book';

@Component({
  selector: 'page-publisher',
  templateUrl: 'publisher.html'
})
export class PublisherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {

  }

  ionViewDidEnter() {
   this.menuCtrl.enable(false, 'menu-customer');
   this.menuCtrl.enable(true, 'menu-publisher');
   this.menuCtrl.enable(false, 'outline-book');
  }

  ionViewDidLoad() {
  }


  openPublishABook(){
    this.navCtrl.push(PublishABookPage);
  }
}
