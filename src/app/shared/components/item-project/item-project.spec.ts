import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProject } from './item-project';

describe('ItemProject', () => {
  let component: ItemProject;
  let fixture: ComponentFixture<ItemProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemProject],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
