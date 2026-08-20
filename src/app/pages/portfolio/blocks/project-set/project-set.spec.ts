import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSet } from './project-set';

describe('ProjectSet', () => {
  let component: ProjectSet;
  let fixture: ComponentFixture<ProjectSet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectSet],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectSet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
