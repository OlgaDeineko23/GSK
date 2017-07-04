import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalendarOckovaniaComponent } from './kalendar-ockovania.component';

describe('KalendarOckovaniaComponent', () => {
  let component: KalendarOckovaniaComponent;
  let fixture: ComponentFixture<KalendarOckovaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalendarOckovaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalendarOckovaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
