import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  movieTitle = '';
  
  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((params) => {
      this.movieTitle = params['movieTitle'];
    })
  }

}
