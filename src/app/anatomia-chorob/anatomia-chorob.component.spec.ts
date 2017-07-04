import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomiaChorobComponent } from './anatomia-chorob.component';

describe('AnatomiaChorobComponent', () => {
  let component: AnatomiaChorobComponent;
  let fixture: ComponentFixture<AnatomiaChorobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnatomiaChorobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnatomiaChorobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
