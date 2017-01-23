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
    BookComponent,
    Ionic2Rating
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
