import { Component } from '@angular/core';
import { NavController, NavParams, MenuController} from 'ionic-angular';

/*
  Generated class for the Publisher page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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

}
