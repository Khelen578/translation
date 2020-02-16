import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { Observable, throwError } from 'rxjs';
import { SearchResult } from '../interfaces/search-result';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  // Have to use proxy server, jisho.org does not allow CORS
  private DOMAIN = 'http://93.29.84.137:3500';
  private SEARCH_URL = `${this.DOMAIN}/api/v1/search/words`;

  constructor(private http: HttpClient) { }

  search(keyword: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.SEARCH_URL}${keyword}`).pipe(
      catchError(this.handlError)
    );
  }

  // gestion des erreurs
  handlError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}

