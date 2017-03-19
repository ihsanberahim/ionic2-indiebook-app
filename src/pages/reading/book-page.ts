import { Injectable } from '@angular/core';

@Injectable()
export class BookPageService{
 findAll() {
  return new Promise((resolve, reject) => resolve([
   {
    page: 1,
    content: '<h1>Angular2 Book</h1>'
   },
   {
    page: 2,
    content: ''+
     '<h2>Title 1</h2>'+
     'This book is about Angular2. This is quite interesting.'+
    ''
   },
  ]));
 }
}
