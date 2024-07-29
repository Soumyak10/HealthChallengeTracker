import { TestBed } from '@angular/core/testing';
import { WorkoutListComponent } from './workout-list.component';
import { UserService } from '../user.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

describe('WorkoutListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutListComponent],
      providers: [UserService, { provide: PLATFORM_ID, useValue: 'browser' }],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WorkoutListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display user data', () => {
    const fixture = TestBed.createComponent(WorkoutListComponent);
    const component = fixture.componentInstance;
    const userService = TestBed.inject(UserService);
    const userData = userService.getUserData();
    fixture.detectChanges();

    const tableElement = fixture.nativeElement.querySelector('p-table');
    expect(tableElement).toBeTruthy();

    const tableRows = tableElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(userData.length + 1);
  });

  afterEach(() => {
    localStorage.removeItem('userData');
  });
});
