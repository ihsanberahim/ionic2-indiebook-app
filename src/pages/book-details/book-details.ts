import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { File } from 'ionic-native';

@Component({
  selector: 'page-book-details',
  templateUrl: 'book-details.html'
})
export class BookDetailsPage {

  private rate = 2.5;

  constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform) {}

  ionViewDidLoad() {
  }


  openPDF(ebook_url) {
    let vm = this;
    let cordova;
    let target_path;
    // let url = 'http://www.hilalasyraf.com/manuskrip_pemburu_final.pdf';
    let url: string = ebook_url;
    let trustHosts: boolean = true;
    let options: any = {
        title: '',
        documentView : {
            closeLabel : ''
        },
        navigationView : {
            closeLabel : ''
        },
        email : {
            enabled : false
        },
        print : {
            enabled : false
        },
        openWith : {
            enabled : false
        },
        bookmarks : {
            enabled : true
        },
        search : {
            enabled : false
        }
    };

    Promise.all([])
    .then(() => {
        return new Promise((resolve, reject) => {
            console.log('waiting for cordova...');

            vm.plt.ready().then((readySource) => {
                console.log('cordova ready');

                cordova = (<any>window).cordova;
                target_path = cordova.file.applicationDirectory+'www/assets/sample_ebook.pdf';
                // target_path = cordova.file.applicationStorageDirectory+'readnow.pdf';

                if(cordova){
                  resolve();
                }else{
                  reject();
                }
            });
        });
    })
    // .then(() => {
    //     return new Promise((resolve, reject) => {
    //         console.log('pdf transfering...');

    //         const fileTransfer = new Transfer();
    //         fileTransfer.download(url, target_path, trustHosts).then((entry) => {
    //             console.log('pdf transfered');
    //             resolve();
    //         });
    //     });
    // })
    .then(() => {
        return new Promise((resolve, reject) => {
            console.log('opening pdf...');

            cordova.plugins.SitewaertsDocumentViewer.viewDocument(target_path, 'application/pdf', options);

            resolve();
        })
    });
  }
}
