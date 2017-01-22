import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { App } from './app.component';

import { HomePage } from '../pages/home/home';

import { BookComponent } from '../components/book/book';

import { HomeTabPage } from '../pages/home-tab/home-tab';
import { LikesTabPage } from '../pages/likes-tab/likes-tab';
import { MyBooksTabPage } from '../pages/my-books-tab/my-books-tab';
import { SearchTabPage } from '../pages/search-tab/search-tab';

@NgModule({
  declarations: [
    App,
    HomePage,
    HomeTabPage,
    LikesTabPage,
    MyBooksTabPage,
    SearchTabPage,
    BookComponent
  ],
  imports: [
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    HomePage,
    HomeTabPage,
    LikesTabPage,
    MyBooksTabPage,
    SearchTabPage,
    BookComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
