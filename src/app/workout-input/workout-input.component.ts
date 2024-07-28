import { Component, Input } from '@angular/core';
import { Workout } from '../workout';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  standalone: true,
  selector: 'app-workout-input',
  templateUrl: './workout-input.component.html',
  styleUrl: './workout-input.component.css',
  imports: [FormsModule, NgIf, UpperCasePipe],
})
export class WorkoutInputComponent {
  constructor(private userService: UserService) {}
  @Input() workout: Workout = new Workout('', '', 0);

  onSubmit(workoutForm: NgForm) {
    this.userService.addUserData(workoutForm.form.value);
    this.workout = {
      userName: '',
      workoutMinutes: 0,
      workoutType: '',
    };
  }
}
