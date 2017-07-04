import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OchranMacikaGameComponent } from './ochran-macika-game.component';

describe('OchranMacikaGameComponent', () => {
  let component: OchranMacikaGameComponent;
  let fixture: ComponentFixture<OchranMacikaGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OchranMacikaGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OchranMacikaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
