import { TestBed } from '@angular/core/testing';
import { WorkoutInputComponent } from './workout-input.component';

describe('WorkoutInputComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutInputComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WorkoutInputComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
