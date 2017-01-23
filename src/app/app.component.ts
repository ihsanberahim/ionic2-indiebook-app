import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { PublisherPage } from '../pages/publisher/publisher';

@Component({
  templateUrl: 'app.html'
})
export class App {
  @ViewChild('approot') navCtrl;

  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openCustomerPage(){
    this.navCtrl.setRoot(HomePage);
  }
  openPublisherPage(){
    this.navCtrl.setRoot(PublisherPage);
  }
}
