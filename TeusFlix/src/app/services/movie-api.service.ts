import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  constructor(private http: HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "19bffd15c3bdb0bedc458c0ec3e924c2";

  // banner API Data
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}&language=pt-BR`);
  }
  // ...

// trending Movies API Data
trendingMovieApiData(): Observable<any> {
  return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}&language=pt-BR`);
}

// ...

}

