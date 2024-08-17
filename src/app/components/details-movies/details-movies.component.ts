import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.css'
})
export class DetailsMoviesComponent implements OnInit{

  movies: any[] = [];

  constructor(private moviesService: MoviesService) {
    
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.moviesService.getMovies().subscribe((data: any[]) => {
      this.movies = data;
    })
  }


}
