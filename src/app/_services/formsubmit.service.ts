import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsubmitService {

  constructor(
    public httpClient: HttpClient
  ) { }

  sendForm(formData: Object) {
    this.httpClient.post('https://formsubmit.co/b1274e3418aab7c22bf776fb0469fc35', formData)
      .subscribe((res) => console.log(res));
  }
}

/*Below is from formsubmit.IO not if that is fake or what*/
// https://formsubmit.io/send/b139e854-4098-49f0-999a-73563fd8accc
