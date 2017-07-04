import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OchranMacikaComponent } from './ochran-macika.component';

describe('OchranMacikaComponent', () => {
  let component: OchranMacikaComponent;
  let fixture: ComponentFixture<OchranMacikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OchranMacikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OchranMacikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
