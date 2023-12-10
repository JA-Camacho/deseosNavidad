import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deseo } from '../models/deseo';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  readonly URL_API = 'https://backenddeseos.azurewebsites.net/desires';
  constructor(private http: HttpClient) {
   }
  
  getDesires() {
    return this.http.get(this.URL_API);
  }
  postDesire(deseo: Deseo){
    let URL_API_POST = 'https://backenddeseos.azurewebsites.net/badWords';
    return this.http.post(URL_API_POST, deseo);
  }
}