import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 
import { MovieApiService } from 'src/app/services/movie-api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private service: MovieApiService) { }
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });
  searchResult: any;

  submitForm() {
    console.log(this.searchForm.value, 'searchForm#');
    this.service.searchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result, 'searchMovieSubmit#');
      this.searchResult = result.results;
    });
  }
}
