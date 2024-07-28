export class Workout {
  constructor(
    public userName: string,
    public workoutType: string,
    public workoutMinutes: number
  ) {
    this.userName = userName;
    this.workoutType = workoutType;
    this.workoutMinutes = workoutMinutes;
  }
}

export interface IWorkout {
  type: string;
  minutes: number;
}
