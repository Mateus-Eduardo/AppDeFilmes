import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  constructor(private service: MovieApiService, private router: ActivatedRoute) { }

  movieResult: any;
  movieVideoResult: string = '';
  movieCastResult: any;

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    this.getMovie(id);
    this.getVideo(id);
    this.getCast(id);
  }

  getMovie(id: any) {
    this.service.movieDetails(id).subscribe((result) => {
      this.movieResult = result;
    });
  }

  getVideo(id: any) {
    this.service.movieVideo(id).subscribe((result) => {
      result.results.forEach((elem: any) => {
        if (elem.type == 'Trailer') {
          this.movieVideoResult = 'https://www.youtube.com/embed/' + elem.key;
        }
      });
    });
  }

  getCast(id: any) {
    this.service.movieCast(id).subscribe((result) => {
      this.movieCastResult = result.cast;
    });
  }
}
