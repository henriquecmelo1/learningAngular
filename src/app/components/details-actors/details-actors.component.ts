import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details-actors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.css'
})
export class DetailsActorsComponent {

  actors = [
    {
      name: 'Jack Black',
      role: 'Po (voice)',
      imageUrl: '/assets/actors/jack-black.webp'
    },
    {
      name: 'Jack Black',
      role: 'Po (voice)',
      imageUrl: '/assets/actors/jack-black.webp'
    },
    {
      name: 'Jack Black',
      role: 'Po (voice)',
      imageUrl: '/assets/actors/jack-black.webp'
    },
    {
      name: 'Jack Black',
      role: 'Po (voice)',
      imageUrl: '/assets/actors/jack-black.webp'
    },
    {
      name: 'Jack Black',
      role: 'Po (voice)',
      imageUrl: '/assets/actors/jack-black.webp'
    }
  ];
}
