import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // private httpClientInjection = inject(HttpClient);
  // another way to inject HttpClient
  constructor(private httpClient: HttpClient) { 
    
  }

  getFanFavouriteMovies() {
    return this.httpClient.get<any[]>('assets/data/fanFavourites.json');
 }

  getTopMovies() {
    return this.httpClient.get<any[]>('assets/data/topMovies.json')
  }

  getMovieDetails() {
    return this.httpClient.get('assets/data/movieDetails.json')
  }

  getActors(){
    return this.httpClient.get<any[]>('assets/data/actorsDetails.json')
  }

  getMovies(){
    return this.httpClient.get<any[]>('assets/data/similarMoviesDetails.json')
  }

  getReviews(){
    return this.httpClient.get<any[]>('assets/data/reviewsDetails.json')
  }

  getSearchedMovies(){
    return this.httpClient.get<any[]>('assets/data/searchMovies.json')
  }

}
