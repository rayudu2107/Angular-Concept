import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolComponent } from './todol.component';

describe('TodolComponent', () => {
  let component: TodolComponent;
  let fixture: ComponentFixture<TodolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
