import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodofComponent } from './todof.component';

describe('TodofComponent', () => {
  let component: TodofComponent;
  let fixture: ComponentFixture<TodofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
