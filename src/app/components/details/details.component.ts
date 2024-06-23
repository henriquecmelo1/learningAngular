import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsMoviesComponent, DetailsReviewsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnChanges, OnInit, AfterContentInit, AfterViewInit{
  constructor() {}
  ngOnChanges(): void { //no input so it will not be called
    console.log('DetailsComponent: ngOnChanges');
  }
  ngOnInit(): void {
    console.log('DetailsComponent: ngOnInit');
  }
  ngAfterContentInit(): void {
    console.log('DetailsComponent: ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('DetailsComponent: ngAfterViewInit');
  }
}
