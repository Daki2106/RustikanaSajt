import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galerija } from './galerija';

describe('Galerija', () => {
  let component: Galerija;
  let fixture: ComponentFixture<Galerija>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galerija]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Galerija);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
