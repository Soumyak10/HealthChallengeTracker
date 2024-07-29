import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { PLATFORM_ID } from '@angular/core';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [UserService, { provide: PLATFORM_ID, useValue: 'browser' }],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(UserService);
    localStorage.removeItem('userData');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load default data when no data is found in local storage', () => {
    const userData = service.getUserData();
    expect(userData.length).toBe(3);
  });

  it('should save and retrieve data from local storage', () => {
    const formData = {
      userName: 'New User',
      workoutType: 'Running',
      workoutMinutes: 30,
    };
    service.addUserData(formData);
    const storedData = localStorage.getItem('userData');
    expect(storedData).toBeTruthy();
    const parsedData = JSON.parse(storedData!);
    expect(parsedData.length).toBe(4);
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
    const newUser = userData.find((user) => user.name === 'New User');
    expect(newUser).toBeTruthy();
    expect(newUser!.workouts.length).toBe(1);
    expect(newUser!.workouts[0].type).toBe('Running');
    expect(newUser!.workouts[0].minutes).toBe(30);
  });

  it('should add new workout to existing user', () => {
    const formData = {
      userName: 'John Doe',
      workoutType: 'Swimming',
      workoutMinutes: 60,
    };
    service.addUserData(formData);
    const userData = service.getUserData();
    const johnDoe = userData.find((user) => user.name === 'John Doe');
    expect(johnDoe).toBeTruthy();
    expect(johnDoe!.workouts.length).toBe(3);
  });

  it('should handle empty localStorage gracefully', () => {
    localStorage.removeItem('userData');
    const userData = service.getUserData();
    expect(userData.length).toBe(3);
  });

  it('should not duplicate user when adding workout for existing user', () => {
    const formData = {
      userName: 'John Doe',
      workoutType: 'Swimming',
      workoutMinutes: 60,
    };
    service.addUserData(formData);
    const userData = service.getUserData();
    const johnDoeUsers = userData.filter((user) => user.name === 'John Doe');
    expect(johnDoeUsers.length).toBe(1);
  });

  it('should initialize user data in constructor if localStorage is empty', () => {
    localStorage.removeItem('userData');
    service = TestBed.inject(UserService);
    const userData = service.getUserData();
    expect(userData.length).toBe(3);
  });

  afterEach(() => {
    localStorage.removeItem('userData');
  });
});
