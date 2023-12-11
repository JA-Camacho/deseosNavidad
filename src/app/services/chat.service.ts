import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, timer, Observable } from 'rxjs';
import { retryWhen, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';
  private apiKey = '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';
  private organizationId = 'org-OsbCvvCylmMz8x4CRzysRsNn'; 

  constructor(private http: HttpClient) {}

  clasificarPalabra(palabra: string): Observable<any> {
    const payload = {
      prompt: `Clasifica la palabra: ${palabra} como inapropiada o no.`,
      max_tokens: 1,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
      'Organization': this.organizationId,
    });

    console.log(headers); // Agrega esta línea para imprimir el encabezado antes de la solicitud

    return this.http.post(this.apiUrl, payload, { headers }).pipe(
      retryWhen(errors =>
        errors.pipe(
          mergeMap((error, count) => {
            if (count < 3 && error.status === 429) {
              const retryDelay = (count + 1) * 2000;
              return timer(retryDelay);
            }
            return throwError(error);
          })
        )
      )
    );
  }
}
