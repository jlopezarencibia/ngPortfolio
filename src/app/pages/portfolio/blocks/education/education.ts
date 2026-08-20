import { Component } from '@angular/core';
import { AppCard } from '../../../../shared/components/app-card/app-card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  imports: [AppCard, FaIconComponent],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  protected readonly faUniversity = faUniversity;
}
