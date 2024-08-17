import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details-actors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.css'
})
export class DetailsActorsComponent implements OnInit {

  actors: any[] = [];

  constructor(private moviesService: MoviesService) {
    
  }

  ngOnInit(): void {
    this.getActors();
  }

  getActors(){
    this.moviesService.getActors().subscribe((data: any[]) => {
      this.actors = data;
    })
  }
}
