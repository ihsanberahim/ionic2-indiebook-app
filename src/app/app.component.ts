import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from '../pages/home/home';
import { PublisherPage } from '../pages/publisher/publisher';
import { PublishABookPage } from '../pages/publish-a-book/publish-a-book';
import { ManageBooksPage } from '../pages/manage-books/manage-books';
import { LoginPage } from '../pages/login/login';
import { HelpCenterPage } from '../pages/help-center/help-center';
import { ReportAProblemPage } from '../pages/report-a-problem/report-a-problem';
import { TermsPoliciesPage } from '../pages/terms-policies/terms-policies';
import { AboutPage } from '../pages/about/about';
// import { PageEditorPage } from '../pages/page-editor/page-editor';

import { ReadingPage } from '../pages/reading/reading';

declare var Trianglify:any;

@Component({
  templateUrl: 'app.html'
})
export class App {
  @ViewChild('approot') navCtrl;

  rootPage = HomePage;

  readingScreen: ReadingPage;
  bookOutlineItems: any = [];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      var pattern = Trianglify({
        height: 160,
        width: 300,
        cell_size: 160
      });

      document.getElementById('background-customer').appendChild(pattern.svg());
      document.getElementById('background-publisher').appendChild(pattern.svg());
    });
  }

  setReadingScreen(screen: ReadingPage) {
   this.readingScreen = screen;
  }
  updateBookOutline(_bookOutlineItems: any) {
   this.bookOutlineItems = _bookOutlineItems;
  }
  jumpReadingToPage(pageNumber: number) {
   console.log('jumpReadingToPage...');

   this.readingScreen.jumpToPage(pageNumber);
  }

  openCustomerPage() {
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
