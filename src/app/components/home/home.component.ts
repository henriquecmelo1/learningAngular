import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDirective } from '../../directives/header.directive';

import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';


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

  constructor(private httpClient: HttpClient) {
    
  }

  ngOnInit(): void {
    this.getFanFavouriteMovies();
    this.getTopMovies();
  }

  getFanFavouriteMovies(){
    this.httpClient.get<any[]>('assets/data/fanFavourites.json').subscribe((data: any[]) => {
      this.fanFavouriteMovies = data;
    })
  }

  getTopMovies(){
    this.httpClient.get<any[]>('assets/data/topMovies.json').subscribe((data: any[]) => {
      this.cards = data;
    })
  }
}
