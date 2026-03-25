import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONama } from './o-nama';

describe('ONama', () => {
  let component: ONama;
  let fixture: ComponentFixture<ONama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ONama]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ONama);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
