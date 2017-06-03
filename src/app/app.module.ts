import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';

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
import { PageEditorPageModule } from '../pages/page-editor/page-editor.module';

import { ReadingPage } from '../pages/reading/reading';
import { ReadingToolsComponent } from '../components/reading-tools/reading-tools';

import { BookPageService } from '../pages/reading/book-page';
import { BookOutlineService } from '../pages/reading/book-outline';

@NgModule({
  declarations: [
    App,
    BookComponent,
    ReadingToolsComponent,
    HomePage,
    HomeTabPage,
    LikesTabPage,
    MyBooksTabPage,
    SearchTabPage,
    PublisherPage,
    BookDetailsPage,
    PublishABookPage,
    BookPreviewPage,
    ManageBooksPage,
    LoginPage,
    HelpCenterPage,
    ReportAProblemPage,
    TermsPoliciesPage,
    AboutPage,
    ReadingPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(App),
    Ionic2RatingModule,
    PageEditorPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    HomePage,
    HomeTabPage,
    LikesTabPage,
    MyBooksTabPage,
    SearchTabPage,
    PublisherPage,
    BookDetailsPage,
    PublishABookPage,
    BookPreviewPage,
    ManageBooksPage,
    LoginPage,
    HelpCenterPage,
    ReportAProblemPage,
    TermsPoliciesPage,
    AboutPage,
    ReadingPage,
    BookComponent,
    ReadingToolsComponent,
  ],
  providers: [
   StatusBar,
   SplashScreen,
   {provide: ErrorHandler, useClass: IonicErrorHandler},
   BookPageService,
   BookOutlineService,
  ]
})
export class AppModule {}
