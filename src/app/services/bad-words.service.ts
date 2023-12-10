import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BadWordsService {
  //readonly URL_API = 'https://backenddeseos.azurewebsites.net/badWords';
  readonly URL_API = 'http://localhost:3000/badWords';
  constructor(private http: HttpClient) {
   }
  
  getBadWords() {
    return this.http.get(this.URL_API);
  }
}