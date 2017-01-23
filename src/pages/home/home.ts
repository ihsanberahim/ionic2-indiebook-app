import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
import { HomeTabPage } from '../home-tab/home-tab';
import { LikesTabPage } from '../likes-tab/likes-tab';
import { MyBooksTabPage } from '../my-books-tab/my-books-tab';
import { SearchTabPage } from '../search-tab/search-tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homeTab = HomeTabPage;
  likesTab = LikesTabPage;
  mybooksTab = MyBooksTabPage;
  searchTab = SearchTabPage;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    menuCtrl.enable(true, 'menu-customer');
    menuCtrl.enable(false, 'menu-publisher');
  }

}
