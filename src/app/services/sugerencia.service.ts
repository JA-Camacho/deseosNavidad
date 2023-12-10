import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sugerencia } from '../models/sugerencia';

@Injectable({
  providedIn: 'root'
})
export class SugerenciaService {
  //server = process.env['AZURE_SQL_SERVER'];

  readonly URL_API = 'https://backenddeseos.azurewebsites.net/sugerencias';
  constructor(private http: HttpClient) {
   }
  
  postSugerencia(sugerencia: Sugerencia){
    return this.http.post(this.URL_API, sugerencia);
  }
}
