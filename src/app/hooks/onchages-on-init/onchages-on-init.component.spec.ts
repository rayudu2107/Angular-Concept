import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchagesOnInitComponent } from './onchages-on-init.component';

describe('OnchagesOnInitComponent', () => {
  let component: OnchagesOnInitComponent;
  let fixture: ComponentFixture<OnchagesOnInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnchagesOnInitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnchagesOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
