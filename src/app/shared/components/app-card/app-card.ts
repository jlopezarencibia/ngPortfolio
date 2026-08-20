import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './app-card.html',
  styleUrl: './app-card.css',
})
export class AppCard {
  @Input() public dropShadow = true;
  @Input() public hideBorder = true;
}
