import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deseo } from '../models/deseo';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  readonly URL_API = 'http://localhost:3000/desires';
  constructor(private http: HttpClient) {
   }
  
  getDesires() {
    return this.http.get(this.URL_API);
  }
  postDesire(deseo: Deseo){
    let URL_API_POST = 'http://localhost:3000/badWords';
    return this.http.post(URL_API_POST, deseo);
  }
}