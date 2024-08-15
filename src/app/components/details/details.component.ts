import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';
import { DetailsActorsComponent } from '../details-actors/details-actors.component';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, DetailsMoviesComponent, DetailsReviewsComponent, DetailsActorsComponent, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  movieId = ''


  actors: any[] = [];
  directors: any[] = [];
  genres: any[]= [];


  constructor(private _activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this._activatedRoute.params.subscribe((params) => {
      this.movieId = params['id'];
    })
  }

  ngOnInit(): void {
    this.loadMovieDetails();
  }

  loadMovieDetails() {
    this.httpClient.get('assets/data/movieDetails.json').subscribe((data: any) => {
      this.actors = data.actors;
      this.directors = data.directors;
      this.genres = data.genres;
    })
  }

}
