import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BadWordsService {
  readonly URL_API = 'https://backenddeseos.azurewebsites.net/badWords';
  constructor(private http: HttpClient) {
   }
  
  getBadWords() {
    return this.http.get(this.URL_API);
  }
}