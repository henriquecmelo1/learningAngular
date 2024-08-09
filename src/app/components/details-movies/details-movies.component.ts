import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.css'
})
export class DetailsMoviesComponent {

  movies = [
    {
      imageUrl: '/assets/posters/shrek.jpg',
      title: 'Shrek',
      rate: 10
    },
    {
      imageUrl: '/assets/posters/batman.jpg',
      title: 'Batman',
      rate: 9
    },
    {
      imageUrl: '/assets/posters/venom.webp',
      title: 'Venom',
      rate: 7
    },
  ];

}
