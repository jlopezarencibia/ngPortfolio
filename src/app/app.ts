import { Component, signal } from '@angular/core';
import { Portfolio } from './pages/portfolio/portfolio';

@Component({
  selector: 'app-root',
  imports: [Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Portfolio');
}
