import { Component } from '@angular/core';
import { ItemLanguage, ItemLanguageData } from '../../../../shared/components/item-language/item-language';

@Component({
  selector: 'app-language-set',
  imports: [ItemLanguage],
  templateUrl: './language-set.html',
  styleUrl: './language-set.css',
})
export class LanguageSet {
  protected readonly languageSetData: ItemLanguageData[] = [
    {
      language: 'Spanish',
      proficiency: 'Native',
      iconUrl: 'assets/icons/ic-es.png',
    },
    {
      language: 'English',
      proficiency: 'Fluent',
      iconUrl: 'assets/icons/ic-en.png',
    },
  ];
}
