import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 



import { NavBarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { SearchComponent } from './components/search/search.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HomeComponent, FooterComponent, DetailsComponent, SearchComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
})
export class AppComponent {
  
}
