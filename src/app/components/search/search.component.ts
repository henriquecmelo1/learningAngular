import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  movieTitle = '';
  searchResults: any[] = [];
  
  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
    this.activatedRoute.params.subscribe((params) => {
      this.movieTitle = params['movieTitle'];
    })
    
  }


  ngOnInit(): void {
      this.getSearchedMovies();
  }

  getSearchedMovies(){
    this.moviesService.getSearchedMovies().subscribe((data: any[]) => {
      this.searchResults = data
    })
  }
}
