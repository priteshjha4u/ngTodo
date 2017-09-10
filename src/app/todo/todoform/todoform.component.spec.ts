import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoformComponent } from './todoform.component';

describe('TodoformComponent', () => {
  let component: TodoformComponent;
  let fixture: ComponentFixture<TodoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
