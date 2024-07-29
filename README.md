# Health Challenge Tracker

## Overview

The Health Challenge Tracker is a single-page application (SPA) developed with Angular 14+ that allows users to log their workout sessions, filter and search through their workout history, and visualize their progress. This project makes use of PrimeNG for UI components and TailwindCSS for styling. It also includes local storage for data persistence and is deployed on Netlify.

## Features

- **User Workout Input**: Users can add workout sessions by entering their name, workout type, and workout minutes.
- **Workout List Display**: Displays a list of all workouts with search and filter functionalities.
- **Search and Filter**: Users can search for workouts by username and filter by workout type.
- **Pagination**: Supports pagination for workout lists with more than 5 users (Please Refresh if it doesn't work).
- **Local Storage**: Data is stored locally using localStorage to persist user workouts.
- **Charts**: Visual representation of workout progress using charts.
- **Unit Tests**: 90% code coverage one service and 87% code coverage for whole project, with a code coverage report included below.
- **Deployment**: The application is hosted on netlify.

## Assumptions

- Initial data includes three users with predefined workout sessions.
- Data is persisted in localStorage, ensuring it remains available even after a page refresh.

## Technologies Used

- Angular 14+
- PrimeNG
- TailwindCSS
- LocalStorage
- Netlify

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Soumyak10/HealthChallengeTracker/tree/mastert
   cd health-challenge-tracker
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   ng serve
   ```
   The application will be accessible at `http://localhost:4200`.

## Unit Tests

To run the unit tests and view the code coverage report:

1. **Run tests**:

   ```bash
   ng test --code-coverage
   ```

2. **View the coverage report**:
   Open the `coverage` directory and open the `index.html` file in a browser to view the code coverage report.

## Deployment

The application is hosted on Netlify You can access the live version at:

https://soumya-health-challenge-tracker.netlify.app/

## Project Structure

```
health-challenge-tracker/
├── src/
│   ├── app/
|   |   ├── progress-charts/
│   │   │   ├── progress-charts.component.html
│   │   │   ├── progress-charts.component.ts
│   │   │   ├── progress-charts.component.css
│   │   ├── workout-input/
│   │   │   ├── workout-input.component.html
│   │   │   ├── workout-input.component.ts
│   │   │   ├── workout-input.component.css
|   |   |   |── workout-input.specs.ts
│   │   ├── workout-list/
│   │   │   ├── workout-list.component.html
│   │   │   ├── workout-list.component.ts
│   │   │   ├── workout-list.component.css
|   |   |   |── workout-list.specs.ts
│   │   ├── user.service.ts
│   │   ├── user.ts
│   │   ├── workout.ts
│   │   ├── app.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   ├── assets/
│   ├── environments/
│   ├── main.ts
│   ├── styles.css
├── angular.json
├── package.json
└── README.md
```

## Usage

### Adding a Workout

1. Click the "Add Workout" button to display the workout input form.
2. Enter the user name, workout type, and workout minutes.
3. Click "Save Workout" to add the workout to the list.

### Searching and Filtering

- **Search**: Use the search input to filter workouts by user name.
- **Filter**: Use the dropdown to filter workouts by workout type.

### Pagination

- The workout list supports pagination, allowing users to navigate through multiple pages of workout entries.

### Code Coverage Reports

![Coverage Report of Service]('./ServiceReport.png')
![Coverage Report of The App Component]('./AppComponentReport.png')
![Coverage Report of The Project]('./ProjectReport.png')

### Charts

Charts provide a visual representation of the workout progress for each user (Time v/s Workout).

## Contact

For any questions or issues, please open an issue in the repository or contact Soumya Kessharwani at Kesharwanisoumya10@gmail.com.
