import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSet } from './language-set';

describe('LanguageSet', () => {
  let component: LanguageSet;
  let fixture: ComponentFixture<LanguageSet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSet],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
