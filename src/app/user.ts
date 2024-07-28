import { IWorkout } from './workout';

export interface IUser {
  name: string;
  id: number;
  workouts: IWorkout[];
}
