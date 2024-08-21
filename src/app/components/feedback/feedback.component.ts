import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../data/model/Feedback';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [NgModel],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit {

  feedback: Feedback = new Feedback('', '', 5, '', '');

  ngOnInit(): void {

  }

  submitFeedback() {
    console.log("Feedback form [Submit] - ", this.feedback);
  }

}
