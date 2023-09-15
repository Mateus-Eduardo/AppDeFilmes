import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiService) { }
  
  bannerResult: any[] = []; // Vetor para receber os resultados

  ngOnInit(): void {
    this.bannerData();
  }

  // Banner Data
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerResult#');
      this.bannerResult = result.results;
    });
  }
}
