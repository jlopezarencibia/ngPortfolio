import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSkill } from './item-skill';

describe('ItemSkill', () => {
  let component: ItemSkill;
  let fixture: ComponentFixture<ItemSkill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSkill],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemSkill);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
