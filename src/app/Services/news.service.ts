import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private api_key = '70f5aa3fa5c3435f903c88ed4435d01f';

  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${this.api_key}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  initArticles() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.api_key}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getArticlesByID(source: string) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${this.api_key}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
