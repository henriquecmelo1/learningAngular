import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.css'
})
export class DetailsReviewsComponent implements OnInit{

  reviews:any[] = [];

  constructor(private httpClient: HttpClient) { 

  }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(){
    this.httpClient.get<any[]>('assets/data/reviewsDetails.json').subscribe((data: any[]) => {
      this.reviews = data;
    })
  }

}
