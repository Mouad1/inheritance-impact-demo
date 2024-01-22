import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompcComponent } from './compc.component';

describe('CompcComponent', () => {
  let component: CompcComponent;
  let fixture: ComponentFixture<CompcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
