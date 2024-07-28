export class Workout {
  constructor(
    public id?: number,
    public userName?: string,
    public workoutType?: string,
    public workoutMinutes?: number
  ) {
    this.id = new Date().getTime();
    this.userName = userName || '';
    this.workoutType = workoutType || '';
    this.workoutMinutes = workoutMinutes || 0;
  }
}
