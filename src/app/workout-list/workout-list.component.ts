import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';
import { TableModule } from 'primeng/table';
import { IWorkout } from '../workout';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css',
  imports: [TableModule, FormsModule],
  standalone: true,
})
export class WorkoutListComponent {
  filterWorkoutType!: string;
  filterUserData() {
    throw new Error('Method not implemented.');
  }
  filteredUserData: any;
  searchName!: string;
  searchUserData() {
    throw new Error('Method not implemented.');
  }
  rows!: number;
  first!: number;
  onPageChange(arg0: {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
  }) {
    throw new Error('Method not implemented.');
  }
  paginatedUserData: any;
  userData: any;
  constructor(private userService: UserService) {}
  users = this.userService.getUserData();
  filteredUsers = this.users;

  @Input() query: string = '';
  @Input() filter: string = '';

  getTotalWorkoutMinutes(workouts: IWorkout[]): number {
    return workouts.reduce((acc, workout) => acc + workout.minutes, 0);
  }
  getAllWorkouts(workouts: IWorkout[]): string {
    return workouts.map((workout) => workout.type).join(', ');
  }

  updateFilteredUsers(): void {
    this.filteredUsers = this.users.filter((user) => {
      const queryLower = this.query.toLowerCase();
      const filterLower = this.filter.toLowerCase();
      return (
        user.name.toLowerCase().includes(queryLower) &&
        user.workouts.some((workout) =>
          workout.type.toLowerCase().includes(filterLower)
        )
      );
    });
  }
}
