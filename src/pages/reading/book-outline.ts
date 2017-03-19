import { Injectable } from '@angular/core';

@Injectable()
export class BookOutlineService{
 findAll() {
  return new Promise((resolve, reject) => resolve([
   {
    page: 1,
    title: 'Title'
   }
  ]));
 }
}
