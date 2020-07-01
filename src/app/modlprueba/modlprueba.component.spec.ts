import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModlpruebaComponent } from './modlprueba.component';

describe('ModlpruebaComponent', () => {
  let component: ModlpruebaComponent;
  let fixture: ComponentFixture<ModlpruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModlpruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModlpruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
