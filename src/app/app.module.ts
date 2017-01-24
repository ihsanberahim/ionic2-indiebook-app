import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Ionic2RatingModule, Ionic2Rating } from 'ionic2-rating';

import { App } from './app.component';

import { BookComponent } from '../components/book/book';

import { HomePage } from '../pages/home/home';
import { HomeTabPage } from '../pages/home-tab/home-tab';
import { LikesTabPage } from '../pages/likes-tab/likes-tab';
import { MyBooksTabPage } from '../pages/my-books-tab/my-books-tab';
import { SearchTabPage } from '../pages/search-tab/search-tab';

import { PublisherPage } from '../pages/publisher/publisher';
import { BookDetailsPage } from '../pages/book-details/book-details';
import { PublishABookPage } from '../pages/publish-a-book/publish-a-book';
import { BookPreviewPage } from '../pages/book-preview/book-preview';
import { ManageBooksPage } from '../pages/manage-books/manage-books';
import { LoginPage } from '../pages/login/login';
import { HelpCenterPage } from '../pages/help-center/help-center';
import { ReportAProblemPage } from '../pages/report-a-problem/report-a-problem';
import { TermsPoliciesPage } from '../pages/terms-policies/terms-policies';
import { AboutPage } from '../pages/about/about';


@NgModule({
  declarations: [
    App,
    HomePage,
    HomeTabPage,
    LikesTabPage,
    MyBooksTabPage,
    SearchTabPage,
    BookDetailsPage,
    PublisherPage,
    PublishABookPage,
    BookPreviewPage,
    ManageBooksPage,
    LoginPage,
    HelpCenterPage,
    ReportAProblemPage,
    TermsPoliciesPage,
    AboutPage,
    BookComponent
  ],
  imports: [
    IonicModule.forRoot(App),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    HomePage,
    HomeTabPage,
    LikesTabPage,
    MyBooksTabPage,
    SearchTabPage,
    BookDetailsPage,
    PublisherPage,
    PublishABookPage,
    BookPreviewPage,
    ManageBooksPage,
    LoginPage,
    HelpCenterPage,
    ReportAProblemPage,
    TermsPoliciesPage,
    AboutPage,
    BookComponent,
    Ionic2Rating
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
