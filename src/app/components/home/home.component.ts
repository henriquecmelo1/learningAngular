import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderDirective } from '../../directives/header.directive';
import { title } from 'process';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //[ngClass]
  // errorColor = "text-danger";
  // sucessColor = "text-success";

  // [ngStyle]
  // isSucess = true;
  // isCentered = true;
  // isLarge = true;

  // currentStyles: Record<string, string> = {};

  // *ngIf
  isVisible = true;

  fanFavouriteMovies: any[] = [
    {
      imageUrl: 'assets/posters/shrek.jpg',
      title: 'Shrek',
      actors: ['Mike Myers', 'Eddie Murphy', 'Cameron Diaz'],
      year: 2001,
      rate: 7.8,
      rank: 1,
    },
    {
      imageUrl: 'assets/posters/us-poster.jpeg',
      title: 'Us',
      actors: ['Lupita Nyong\'o', 'Winston Duke', 'Elisabeth Moss'],
      year: 2019,
      rate: 6.9,
      rank: 5,
    },
    {
      imageUrl: 'assets/posters/venom.webp',
      title: 'Venom',
      actors: ['Tom Hardy', 'Michelle Williams', 'Riz Ahmed'],
      year: 2018,
      rate:  6.7,
      rank: 4,
    }
  ];

  cards = [
    {
      imageUrl: 'assets/posters/us-poster.jpeg',
      title: 'Us',
      actors: ['Lupita Nyong\'o', 'Winston Duke', 'Elisabeth Moss'],
    },
    {
      imageUrl: 'assets/posters/shrek.jpg',
      title: 'Shrek',
      actors: ['Mike Myers', 'Eddie Murphy', 'Cameron Diaz'],
    },
    {
      imageUrl: 'assets/posters/venom.webp',
      title:	'Venom',
      actors: ['Tom Hardy', 'Michelle Williams', 'Riz Ahmed'],
    },
  ];

  constructor() {
    // this.currentStyles = {
    //   'text-align': this.isCentered ? 'center' : '',
    //   'color': this.isSucess ? 'green' : 'red',
    //   'font-size': this.isLarge ? 'large' : 'small',
    // }
  }


}
