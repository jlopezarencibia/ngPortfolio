import { Component, Input } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-item-language',
  imports: [NgOptimizedImage],
  templateUrl: './item-language.html',
  styleUrl: './item-language.css',
})
export class ItemLanguage {
  @Input() public data!: ItemLanguageData;
}

export interface ItemLanguageData {
  language: string;
  proficiency: string;
  iconUrl: string;
}
