import { ViewChild, Component } from '@angular/core';
import { NavController, NavParams, PopoverController, Slides, Content, MenuController } from 'ionic-angular';

import { ReadingToolsComponent } from '../../components/reading-tools/reading-tools';
import { App } from '../../app/app.component';
import { BookPageService } from './book-page';
import { BookOutlineService } from './book-outline';

@Component({
  selector: 'page-reading',
  templateUrl: 'reading.html'
})
export class ReadingPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;

  pages: any;
  isLoading: Boolean = true;
  isFullcontent: Boolean = true;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public menuCtrl: MenuController,
   public popoverCtrl: PopoverController,
   public bookPage: BookPageService,
   public bookOutline: BookOutlineService,
   public _app: App) {

   }

  ionViewDidEnter() {
   this.menuCtrl.enable(false, 'menu-customer');
   this.menuCtrl.enable(false, 'menu-publisher');
   this.menuCtrl.enable(true, 'outline-book');
  }

  ionViewDidLoad() {
   let vm = this;

   Promise.all([])
   .then(() => {
    return new Promise((resolve, reject) => {
     this.bookPage.findAll().then(pages => {
      this.pages = pages;

      resolve();
     });
    });
   })
   .then(() => {
    return new Promise((resolve, reject) => {
     this.bookOutline.findAll().then(bookOutlineItems => {
      vm._app.setReadingScreen(this);
      vm._app.updateBookOutline(bookOutlineItems);

      setTimeout(() => {
       resolve();
      }, 750*3);
     });
    });
   })
   .then(() => {
    return new Promise((resolve, reject) => {
     vm.isLoading = false;

     vm.slides.update();

     resolve();
    });
   });
  }

  jumpToPage(pageNumber: number) {
   console.log('jumpToPage...', pageNumber);
   this.slides.slideTo(pageNumber, 500);
  }

  showReadingTools(ev: UIEvent) {
   let popover = this.popoverCtrl.create(ReadingToolsComponent);

   popover.present({
    ev: ev
   });
  }

  toggleFullcontent(ev: UIEvent) {
   this.isFullcontent = !this.isFullcontent;

   this.content.resize();
  }
}
