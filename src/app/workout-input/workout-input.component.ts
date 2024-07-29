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

  constructor(private userService: UserService) {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit(workoutForm: NgForm) {
    if (workoutForm.valid) {
      this.userService.addUserData(workoutForm.form.value);
      this.resetForm();
      this.toggleForm();
    }
  }

  resetForm() {
    this.workout = {
      userName: '',
      workoutMinutes: 0,
      workoutType: '',
    };
  }
}
