import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wishlist';
  items = [
    new WishItem('New Phone', true),
    new WishItem('New Laptop', true),
    new WishItem('New Car', true),
    new WishItem('New House', true),
    new WishItem('New Job', true),
    new WishItem('New Life', true)
  ]
}
