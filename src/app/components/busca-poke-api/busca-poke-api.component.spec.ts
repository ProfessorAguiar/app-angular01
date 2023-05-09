import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPokeApiComponent } from './busca-poke-api.component';

describe('BuscaPokeApiComponent', () => {
  let component: BuscaPokeApiComponent;
  let fixture: ComponentFixture<BuscaPokeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaPokeApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaPokeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
