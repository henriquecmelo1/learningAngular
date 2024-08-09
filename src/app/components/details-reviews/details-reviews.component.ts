import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.css'
})
export class DetailsReviewsComponent {

  reviews:any[] = [
    {
      rate: 5,
      review: 'This is the best movie ever!',
      author: 'John Doe',
      usefulCount: 100,
      totalCount: 120,
    },
    {
      rate: 4,
      review: 'This is a great movie!',
      author: 'Jane Doe',
      usefulCount: 80,
      totalCount: 100,
    },
    {
      rate: 3,
      review: 'This is a good movie!',
      author: 'John Smith',
      usefulCount: 60,
      totalCount: 80,
    },
  ];

}
