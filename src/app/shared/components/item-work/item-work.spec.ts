import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWork } from './item-work';

describe('ItemWork', () => {
  let component: ItemWork;
  let fixture: ComponentFixture<ItemWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemWork],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
