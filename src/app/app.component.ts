import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { PublisherPage } from '../pages/publisher/publisher';
import { PublishABookPage } from '../pages/publish-a-book/publish-a-book';
import { ManageBooksPage } from '../pages/manage-books/manage-books';
import { LoginPage } from '../pages/login/login';
import { HelpCenterPage } from '../pages/help-center/help-center';
import { ReportAProblemPage } from '../pages/report-a-problem/report-a-problem';
import { TermsPoliciesPage } from '../pages/terms-policies/terms-policies';
import { AboutPage } from '../pages/about/about';

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
  openPublishABook(){
    this.navCtrl.push(PublishABookPage);
  }
  openManageBooks(){
    this.navCtrl.push(ManageBooksPage);
  }
  openLogin(){
    this.navCtrl.push(LoginPage);
  }
  openTnc(){
    this.navCtrl.push(TermsPoliciesPage);
  }
  openHelpCenter(){
    this.navCtrl.push(HelpCenterPage);
  }
  openAbout(){
    this.navCtrl.push(AboutPage);
  }
  openReportAProblem(){
    this.navCtrl.push(ReportAProblemPage);
  }
}
