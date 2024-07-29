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
  showForm = false; // Property to control form visibility
  @Input() workout: Workout = new Workout('', '', 0);

  constructor(private userService: UserService) {}

  // Method to toggle the form visibility
  toggleForm() {
    this.showForm = !this.showForm;
  }

  // Method to handle form submission
  onSubmit(workoutForm: NgForm) {
    if (workoutForm.valid) {
      this.userService.addUserData(workoutForm.form.value);
      this.resetForm();
      this.toggleForm(); // Hide the form after submission
    }
  }

  // Method to reset the form fields
  resetForm() {
    this.workout = {
      userName: '',
      workoutMinutes: 0,
      workoutType: '',
    };
  }
}
