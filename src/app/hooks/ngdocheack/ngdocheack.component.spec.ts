import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdocheackComponent } from './ngdocheack.component';

describe('NgdocheackComponent', () => {
  let component: NgdocheackComponent;
  let fixture: ComponentFixture<NgdocheackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdocheackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgdocheackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
