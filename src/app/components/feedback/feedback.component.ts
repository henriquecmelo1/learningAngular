import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../data/model/Feedback';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{
  
  feedback: Feedback = new Feedback('', '', 5, '', '');

  ngOnInit(): void {
    
  }

  submitFeedback() {
    console.log("form submitted");
  }

}
