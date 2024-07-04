import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperCasePipe, DatePipe, CurrencyPipe } from '@angular/common';

import { ProfitPipe } from './pipes/profit.pipe';

import { TestComponent } from './components/test/test.components';
import { DetailsComponent } from './components/details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, DetailsComponent, UpperCasePipe, DatePipe, CurrencyPipe, ProfitPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
})
export class AppComponent {
  title = 'Título: Angular';
  today = new Date();
  price = 100;

  posterUrl = 'https://www.europanet.com.br/upload/id_produto/107___/107344g.jpg';
  posterWidth = 200;
  attributeValue = "Movies";

  multipleClasses = 'sample-bgcolor sample-color';
  multipleStyles = 'color: blue; background-color: yellow;';

  pColor = ''
  setTextColor(_color: string){

    this.pColor = _color;
    
  }
}
