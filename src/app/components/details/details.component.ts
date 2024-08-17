import { Component, OnInit } from '@angular/core';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';
import { DetailsActorsComponent } from '../details-actors/details-actors.component';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';


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


  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
    this.activatedRoute.params.subscribe((params) => {
      this.movieId = params['id'];
    })
  }

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.moviesService.getMovieDetails().subscribe((data: any) => {
      this.actors = data.actors;
      this.directors = data.directors;
      this.genres = data.genres;
    })
  }

}
