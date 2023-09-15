import { Component } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service: MovieApiService) { }
  bannerResult: any = [];
  trendingMovieResult: any = []; 

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
  }


  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerResult#');
      this.bannerResult = result.results;
    });
  }


  trendingMovieData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingMovieResult#');
      this.trendingMovieResult = result.results;
    });
  }
}
