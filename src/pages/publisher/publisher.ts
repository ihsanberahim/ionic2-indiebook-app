import { Component } from '@angular/core';
import { NavController, NavParams, MenuController} from 'ionic-angular';

import { PublishABookPage } from '../publish-a-book/publish-a-book';

@Component({
  selector: 'page-publisher',
  templateUrl: 'publisher.html'
})
export class PublisherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    menuCtrl.enable(false, 'menu-customer');
    menuCtrl.enable(true, 'menu-publisher');
  }

  ionViewDidLoad() {
  }


  openPublishABook(){
    this.navCtrl.push(PublishABookPage);
  }
}
