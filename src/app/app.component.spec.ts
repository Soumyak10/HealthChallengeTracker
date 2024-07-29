import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WorkoutInputComponent } from './workout-input/workout-input.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { ProgressChartsComponent } from './progress-charts/progress-charts.component';
import { Title } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // Include standalone components if they are standalone
        WorkoutInputComponent,
        WorkoutListComponent,
        ProgressChartsComponent,
      ],
      declarations: [AppComponent],
      providers: [Title],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render app-workout-input component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const workoutInput = compiled.querySelector('app-workout-input');
    expect(workoutInput).toBeTruthy();
  });

  it('should render app-workout-list component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const workoutList = compiled.querySelector('app-workout-list');
    expect(workoutList).toBeTruthy();
  });

  it('should render app-progress-charts component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const progressCharts = compiled.querySelector('app-progress-charts');
    expect(progressCharts).toBeTruthy();
  });

  it('should set the document title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(document.title).toBe(app.title);
  });
});
