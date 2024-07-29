import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { WorkoutInputComponent } from './workout-input.component';
import { UserService } from '../user.service';
import { Workout } from '../workout'; // Ensure this import is correct
import { of } from 'rxjs';

describe('WorkoutInputComponent', () => {
  let component: WorkoutInputComponent;
  let fixture: ComponentFixture<WorkoutInputComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UserService', ['addUserData']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, WorkoutInputComponent],
      providers: [{ provide: UserService, useValue: spy }],
    }).compileComponents();

    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    fixture = TestBed.createComponent(WorkoutInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle form visibility', () => {
    expect(component.showForm).toBeFalse();
    component.toggleForm();
    expect(component.showForm).toBeTrue();
    component.toggleForm();
    expect(component.showForm).toBeFalse();
  });

  it('should reset form', () => {
    component.workout = new Workout('John', 'Running', 30);
    component.resetForm();
    // Compare instances of Workout
    expect(component.workout).toEqual(new Workout('', '', 0));
  });

  it('should call UserService.addUserData and toggle form on valid submit', () => {
    const workoutForm = {
      valid: true,
      form: {
        value: { userName: 'John', workoutType: 'Running', workoutMinutes: 30 },
      },
    } as NgForm;

    spyOn(component, 'toggleForm').and.callThrough();
    component.onSubmit(workoutForm);

    // Compare with the actual Workout instance
    expect(userService.addUserData).toHaveBeenCalledWith(jasmine.any(Workout));
    // Verify the instance matches expected values
    const expectedWorkout = new Workout('John', 'Running', 30);
    expect(userService.addUserData.calls.mostRecent().args[0]).toEqual(
      expectedWorkout
    );
    expect(component.workout).toEqual(new Workout('', '', 0));
    expect(component.toggleForm).toHaveBeenCalled();
  });

  it('should not call UserService.addUserData on invalid submit', () => {
    const workoutForm = { valid: false } as NgForm;

    component.onSubmit(workoutForm);

    expect(userService.addUserData).not.toHaveBeenCalled();
  });
});
