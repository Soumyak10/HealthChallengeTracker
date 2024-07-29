import { Component, Input } from '@angular/core';
import { Workout } from '../workout';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  standalone: true,
  selector: 'app-workout-input',
  templateUrl: './workout-input.component.html',
  styleUrls: ['./workout-input.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe],
})
export class WorkoutInputComponent {
  showForm = false;
  @Input() workout: Workout = new Workout('', '', 0);
  inputValue!: string;

  constructor(private userService: UserService) {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit(workoutForm: NgForm) {
    if (workoutForm.valid) {
      // Create a Workout instance from form values
      const workoutData = new Workout(
        workoutForm.form.value.userName,
        workoutForm.form.value.workoutType,
        workoutForm.form.value.workoutMinutes
      );
      this.userService.addUserData(workoutData);
      this.resetForm();
      this.toggleForm();
    }
  }

  resetForm() {
    this.workout = new Workout('', '', 0);
  }
}
