import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';
import { DetailsActorsComponent } from '../details-actors/details-actors.component';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, DetailsMoviesComponent, DetailsReviewsComponent, DetailsActorsComponent, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent{
  
  movieId = ''
  
  
  actors = ['Jack Black', 'Angelina Jolie', 'Seth Rogen', 'Jackie Chan'];
  directors = ['Mark Osborne', 'John Stevenson'];
  genres = ['Animation', 'Action', 'Adventure'];

  
  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((params) => {
      this.movieId = params['id'];
    })
  }
  
  // ngOnChanges(): void { //no input so it will not be called
  //   console.log('DetailsComponent: ngOnChanges');
  // }
  // ngOnInit(): void {
  //   console.log('DetailsComponent: ngOnInit');
  // }
  // ngAfterContentInit(): void {
  //   console.log('DetailsComponent: ngAfterContentInit');
  // }
  // ngAfterViewInit(): void {
  //   console.log('DetailsComponent: ngAfterViewInit');
  // }
}
