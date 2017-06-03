import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import marked from 'marked';

/**
 * Generated class for the PageEditorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-page-editor',
  templateUrl: 'page-editor.html',
})
export class PageEditorPage {
  @ViewChild(Content) content: Content;

  isPreview: boolean = false;
  plainText: string = '';
  markdownText: string = '';
  contentPreview: string = '';

  page: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   if(this.navParams.data)
   {
    if(this.navParams.data.page)
     this.page = this.navParams.data.page;
   }
  }

  ionViewDidLoad() {
  }

  preview() {
   console.log('Preview', this.isPreview);

   if(this.isPreview==true){
    if(this.plainText && this.plainText!=''){
     let plainText = this.plainText;

     this.markdownText = marked(plainText.toString());
     this.contentPreview = this.markdownText;
    }
   }

   this.content.resize();
  }
}
