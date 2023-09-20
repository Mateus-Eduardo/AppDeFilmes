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
actionMovieResult: any=[];
adventureMovieResult: any=[];
animationMovieResult: any=[];
comedyMovieResult: any=[];
documentaryMovieResult: any=[];
scienceFictionMovieResult: any=[];
thrillerMovieResult: any=[];
ngOnInit(): void {
this.bannerData();
this.trendingData();
this.actionMovieData();
this.adventureMovieData();
this.animationMovieData();
this.comedyMovieData();
this.documentaryMovieData();
this.scienceFictionMovieData();
this.thrillerMovieData();
}

bannerData() {
this.service.bannerApiData().subscribe((result) => {
console.log(result, 'bannerResult#');
this.bannerResult = result.results;
});
}

trendingData() {
this.service.trendingMovieApiData().subscribe((result) => {
console.log(result, 'trendingResult#');
this.trendingMovieResult = result.results;
});
}


actionMovieData(){
this.service.fetchActionMovies().subscribe((result)=>{
this.actionMovieResult = result.results;
});
}

adventureMovieData(){
this.service.fetchAdventureMovies().subscribe((result)=>{
this.adventureMovieResult = result.results;
});
}

animationMovieData(){
this.service.fetchAnimationMovies().subscribe((result)=>{
this.animationMovieResult = result.results;
});
}

comedyMovieData(){
this.service.fetchComedyMovies().subscribe((result)=>{
this.comedyMovieResult = result.results;
});
}

documentaryMovieData(){
this.service.fetchDocumentaryMovies().subscribe((result)=>{
this.documentaryMovieResult = result.results;
});
}

scienceFictionMovieData(){
this.service.fetchScienceFictionMovies().subscribe((result)=>{
this.scienceFictionMovieResult = result.results;
});
}

thrillerMovieData(){
this.service.fetchThrillerMovies().subscribe((result)=>{
this.thrillerMovieResult = result.results;
});
}
}