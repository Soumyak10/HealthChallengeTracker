import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { IUser } from './user';
import { Workout } from './workout';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: IUser[];
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.userData = this.loadUserData();
  }

  private saveUserData() {
    if (this.isBrowser)
      localStorage.setItem('userData', JSON.stringify(this.userData));
  }

  private loadUserData(): IUser[] {
    if (this.isBrowser) {
      const getUserData = localStorage.getItem('userData');

      if (getUserData) {
        const userData = JSON.parse(getUserData);
        return userData;
      }
    }
    return [];
  }

  getUserData() {
    return this.userData;
  }

  addUserData(formData: Workout) {
    const user = this.userData.find((user) => user.name === formData.userName);
    const workout = {
      type: formData.workoutType,
      minutes: formData.workoutMinutes,
    };

    if (user !== undefined) {
      user.workouts.push(workout);
    } else {
      const lastId = this.userData.at(-1)?.id ?? 0;
      this.userData.push({
        id: lastId + 1,
        name: formData.userName,
        workouts: [workout],
      });
    }

    this.saveUserData();
  }
}
