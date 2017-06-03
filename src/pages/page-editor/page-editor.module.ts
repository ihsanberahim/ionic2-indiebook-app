import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageEditorPage } from './page-editor';

@NgModule({
  declarations: [
    PageEditorPage,
  ],
  imports: [
    IonicPageModule.forChild(PageEditorPage),
  ],
  exports: [
    PageEditorPage
  ]
})
export class PageEditorPageModule {}
