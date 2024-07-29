import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { UserService } from '../user.service';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { IWorkout } from '../workout';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-progress-charts',
  templateUrl: './progress-charts.component.html',
  styleUrls: ['./progress-charts.component.css'],
  imports: [ChartModule, CommonModule],
  standalone: true,
})
export class ProgressChartsComponent implements OnInit {
  isBrowser: boolean;
  userData: any[];
  userNames: string[];
  selectedUser: string = '';
  chartData: { [key: string]: number } = {};
  basicData: any;
  basicOptions: any;

  constructor(
    private userService: UserService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.userData = this.userService.getUserData();
    this.userNames = this.userData.map((user) => user.name);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.selectedUser = this.userNames[0] || '';
      this.getChartData();
      this.setupChartOptions();
    }
  }

  getChartData() {
    const user = this.userData.find((user) => user.name === this.selectedUser);

    if (user) {
      const aggregatedData: { [key: string]: number } = user.workouts.reduce(
        (acc: { [x: string]: any }, workout: IWorkout) => {
          acc[workout.type] = (acc[workout.type] || 0) + workout.minutes;
          return acc;
        },
        {} as { [key: string]: number }
      );

      const labels = Object.keys(aggregatedData);
      const data = Object.values(aggregatedData);

      this.basicData = {
        labels,
        datasets: [
          {
            label: 'Workout Minutes',
            data,
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgb(255, 159, 64)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }
  }

  setupChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  selectUser(userName: string) {
    this.selectedUser = userName;
    this.getChartData();
  }
}
