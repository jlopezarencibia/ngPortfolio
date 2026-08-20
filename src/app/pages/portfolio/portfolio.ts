import { Component } from '@angular/core';
import { PersonalInformation } from './blocks/personal-information/personal-information';
import { LanguageSet } from './blocks/language-set/language-set';
import { ContactInformation } from './blocks/contact-information/contact-information';
import { ProfessionalExperience } from './blocks/professional-experience/professional-experience';
import { Education } from './blocks/education/education';
import { SkillSet } from './blocks/skill-set/skill-set';
import { AppCard } from '../../shared/components/app-card/app-card';

@Component({
  selector: 'app-portfolio',
  imports: [
    PersonalInformation,
    LanguageSet,
    ContactInformation,
    ProfessionalExperience,
    Education,
    SkillSet
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {}
