import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokegeneratorComponent } from './pokegenerator.component';

describe('PokegeneratorComponent', () => {
  let component: PokegeneratorComponent;
  let fixture: ComponentFixture<PokegeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokegeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
