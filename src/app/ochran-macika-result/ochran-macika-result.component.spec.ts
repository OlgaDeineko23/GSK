import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OchranMacikaResultComponent } from './ochran-macika-result.component';

describe('OchranMacikaResultComponent', () => {
  let component: OchranMacikaResultComponent;
  let fixture: ComponentFixture<OchranMacikaResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OchranMacikaResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OchranMacikaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
