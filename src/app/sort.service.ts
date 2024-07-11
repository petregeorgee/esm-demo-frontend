import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  private apiUrl = 'http://localhost:8080/list/sort';

  constructor(private http: HttpClient) { }

  sortNumbers(numbers: number[]): Observable<number[]> {
    return this.http.post<number[]>(this.apiUrl, numbers)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError('An error occurred while sorting the numbers. Please try again later.');
  }
}
