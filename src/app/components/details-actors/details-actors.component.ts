import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-actors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.css'
})
export class DetailsActorsComponent implements OnInit {

  actors: any[] = [];

  constructor(private httpClient: HttpClient) {
    
  }

  ngOnInit(): void {
    this.getActors();
  }

  getActors(){
    this.httpClient.get<any[]>('assets/data/actorsDetails.json').subscribe((data: any[]) => {
      this.actors = data;
    })
  }
}
