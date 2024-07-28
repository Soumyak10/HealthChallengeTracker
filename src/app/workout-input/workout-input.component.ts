import { Component, Input } from '@angular/core';
import { Workout } from '../workout';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-workout-input',
  templateUrl: './workout-input.component.html',
  styleUrl: './workout-input.component.css',
  imports: [FormsModule, NgIf, UpperCasePipe],
})
export class WorkoutInputComponent {
  @Input() workout: Workout = new Workout();

  onSubmit(workoutForm: NgForm) {
    console.log(workoutForm);
  }
}
