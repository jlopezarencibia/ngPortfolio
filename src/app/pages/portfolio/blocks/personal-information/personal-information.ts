import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personal-information',
  imports: [NgOptimizedImage],
  templateUrl: './personal-information.html',
  styleUrl: './personal-information.css',
})
export class PersonalInformation {

  protected readonly name = 'Jose Lopez'
  protected readonly title = '</SOFTWARE ENGINEER>'
  protected readonly faUniversity = faUniversity;
}
