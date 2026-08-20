import { Component } from '@angular/core';
import {
  faEnvelope,
  faLink,
  faLocation,
  faLocationPin,
  faLocationPinLock,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { AppCard } from '../../../../shared/components/app-card/app-card';

@Component({
  selector: 'app-contact-information',
  imports: [FaIconComponent, AppCard],
  templateUrl: './contact-information.html',
  styleUrl: './contact-information.css',
})
export class ContactInformation {
  protected readonly faEnvelope = faEnvelope;
  protected readonly faPhone = faPhone;

  protected readonly location = 'Greenville, SC';
  protected readonly phoneNumber = '+1 (786) 819 9349';
  protected readonly emailAddress = 'jlopezarencibia@gmail.com';
  protected readonly faLocation = faLocation;
  protected readonly faLocationPin = faLocationPin;
  protected readonly faLocationPinLock = faLocationPinLock;
  protected readonly faLink = faLink;
}
