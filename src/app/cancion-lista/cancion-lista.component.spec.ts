import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionListaComponent } from './cancion-lista.component';

describe('CancionListaComponent', () => {
  let component: CancionListaComponent;
  let fixture: ComponentFixture<CancionListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancionListaComponent]
    });
    fixture = TestBed.createComponent(CancionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
