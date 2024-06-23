import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TestComponent } from './components/test/test.components';
import { DetailsComponent } from './components/details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learningAngular';
}
