import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiService } from './services/movie-api.service';
import { DomSanitizer } from "@angular/platform-browser";
import { Pipe, PipeTransform} from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
constructor(private sanitizer: DomSanitizer) { }
transform(url: string) {
return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
}
@NgModule({
declarations: [
AppComponent,
HomeComponent,
SearchComponent,
MovieDetailsComponent,
SafePipe

],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
ReactiveFormsModule
],
providers: [
MovieApiService,
ReactiveFormsModule
],
bootstrap: [AppComponent]
})
export class AppModule { }
