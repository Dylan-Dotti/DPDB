import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexEntryDisplayComponent } from './pokedex-entry-display.component';

describe('PokedexEntryDisplayComponent', () => {
  let component: PokedexEntryDisplayComponent;
  let fixture: ComponentFixture<PokedexEntryDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexEntryDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexEntryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
