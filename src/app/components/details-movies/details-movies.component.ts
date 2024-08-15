import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.css'
})
export class DetailsMoviesComponent implements OnInit{

  movies: any[] = [];

  constructor(private httpClient: HttpClient) {
    
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.httpClient.get<any[]>('assets/data/similarMoviesDetails.json').subscribe((data: any[]) => {
      this.movies = data;
    })
  }


}
