import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDirective } from '../../directives/header.directive';

import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  fanFavouriteMovies: any[] = [];

  cards: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getFanFavouriteMovies();
    this.getTopMovies();
  }

  getFanFavouriteMovies() {
    this.moviesService.getFanFavouriteMovies().subscribe({
      next: (data: any[]) => {
        this.fanFavouriteMovies = data;
      },
      error: (error) => {
        console.log('Error loading fan favourites: ', error);
      },
      complete: () => {
        console.log('getFanFavouriteMovies loaded successfully');
      }

    })
  }

  getTopMovies() {
    this.moviesService.getTopMovies().subscribe({
      next: (data: any[]) => {
        this.cards = data;
      },
      error: (error) => {
        console.log('Error loading top movies: ', error);
      },
      complete: () => {
        console.log('getTopMovies loaded successfully');
      }

    })
  }
}
