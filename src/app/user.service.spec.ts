import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { PLATFORM_ID } from '@angular/core';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [UserService, { provide: PLATFORM_ID, useValue: 'browser' }],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(UserService);
  });

  it('should add new user data', () => {
    const formData = {
      userName: 'New User',
      workoutType: 'Running',
      workoutMinutes: 30,
    };
    service.addUserData(formData);
    const userData = service.getUserData();
    expect(userData.length).toBe(4);
  });

  it('should load default data when no data is found in local storage', () => {
    const userData = service.getUserData();
    expect(userData.length).toBe(3);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new workout to existing user', () => {
    const formData = {
      userName: 'John Doe',
      workoutType: 'Swimming',
      workoutMinutes: 60,
    };
    service.addUserData(formData);
    const userData = service.getUserData();
    expect(userData[0].workouts.length).toBe(3);
  });

  it('should save data to local storage', () => {
    const formData = {
      userName: 'New User',
      workoutType: 'Running',
      workoutMinutes: 30,
    };
    service.addUserData(formData);
    const storedData = localStorage.getItem('userData');
    expect(storedData).toBeTruthy();
  });

  afterEach(() => {
    localStorage.removeItem('userData');
  });
});
