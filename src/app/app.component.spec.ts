import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WorkoutInputComponent } from './workout-input/workout-input.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { ProgressChartsComponent } from './progress-charts/progress-charts.component';
import { By, Title } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let titleService: Title;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WorkoutInputComponent,
        WorkoutListComponent,
        ProgressChartsComponent,
      ],
      declarations: [AppComponent],
      providers: [Title],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    titleService = TestBed.inject(Title);

    fixture.detectChanges(); // Call detectChanges here
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render app-workout-input component', () => {
    const workoutInput = fixture.debugElement.query(
      By.directive(WorkoutInputComponent)
    );
    expect(workoutInput).toBeTruthy();
  });

  it('should render app-workout-list component', () => {
    const workoutList = fixture.debugElement.query(
      By.directive(WorkoutListComponent)
    );
    expect(workoutList).toBeTruthy();
  });

  it('should render app-progress-charts component', () => {
    const progressCharts = fixture.debugElement.query(
      By.directive(ProgressChartsComponent)
    );
    expect(progressCharts).toBeTruthy();
  });

  it('should set the document title', () => {
    fixture.detectChanges();
    expect(document.title).toBe(app.title);
  });

  it('should call Title service to set the title', () => {
    const setTitleSpy = spyOn(titleService, 'setTitle');
    app.ngOnInit(); // Call ngOnInit manually
    expect(setTitleSpy).toHaveBeenCalledWith('health-challenge-tracker');
  });

  it('should set document title to default value when title service returns empty string', () => {
    const setTitleSpy = spyOn(titleService, 'setTitle');
    spyOn(titleService, 'getTitle').and.returnValue('');
    app.ngOnInit(); // Call ngOnInit manually
    expect(setTitleSpy).toHaveBeenCalledWith('health-challenge-tracker');
  });

  it('should have a title property', () => {
    expect(app.title).toBe('health-challenge-tracker');
  });

  it('should call console.log in ngAfterViewInit', () => {
    const consoleLogSpy = spyOn(console, 'log');
    app.ngAfterViewInit();
    expect(consoleLogSpy).toHaveBeenCalledWith('ngAfterViewInit called');
  });

  it('should update title when title property changes', () => {
    const setTitleSpy = spyOn(titleService, 'setTitle');
    app.title = 'new title';
    app.ngOnInit();
    expect(setTitleSpy).toHaveBeenCalledWith('new title');
  });

  it('should not throw an error when ngOnInit is called', () => {
    expect(() => app.ngOnInit()).not.toThrow();
  });

  it('should not throw an error when ngAfterViewInit is called', () => {
    expect(() => app.ngAfterViewInit()).not.toThrow();
  });

  it('should have a titleService property', () => {
    expect(app['titleService']).toBe(titleService);
  });
});
