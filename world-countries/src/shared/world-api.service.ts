import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { expand, takeWhile, toArray, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorldAPIService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any[]> {
    const baseUrl = '//api.worldbank.org/V2/country?format=json';

    console.log('Fetching data from the API...'); // Add this line

    return this.http.get(baseUrl).pipe(
      expand((data: any) => {
        const nextPage = data[0]?.pages && data[0]?.pages > data[0]?.page
          ? data[0].page + 1
          : null;

        if (nextPage) {
          console.log('Fetching data from page:', nextPage); // Add this line
          return this.http.get(`${baseUrl}&page=${nextPage}`);
        } else {
          console.log('No more data to fetch.'); // Add this line
          return of([]);
        }
      }),
      map((data: any) => {
        console.log('Data received from the API:', data); // Add this line
        return data[1];
      }),
      takeWhile((data: any) => data && data.length > 0, true),
      toArray()
    );
  }
}

