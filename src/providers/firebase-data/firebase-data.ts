import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FirebaseDataProvider Provider');
  }

}
