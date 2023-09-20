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


  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}&language=pt-BR`);
  }

  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}&language=pt-BR`);
  }


  movieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}&language=pt-BR`);
  }


  movieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}&language=pt-BR`);
  }


  movieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}&language=pt-BR`);
  }


  searchMovie(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}&language=pt-BR`);
  }

fetchActionMovies(): Observable<any> {
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28&language=pt-BR`);
}


fetchAdventureMovies(): Observable<any> {
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12&language=pt-BR`);
}


fetchAnimationMovies(): Observable<any> {
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16&language=pt-BR`);
}


fetchComedyMovies(): Observable<any> {
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35&language=pt-BR`);
}


fetchDocumentaryMovies(): Observable<any> {
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99&language=pt-BR`);
}


fetchScienceFictionMovies(): Observable<any> {
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878&language=pt-BR`);
}


fetchThrillerMovies(): Observable<any> {
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53&language=pt-BR`);
}

}
