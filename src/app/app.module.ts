import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutInputComponent } from './workout-input/workout-input.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WorkoutInputComponent],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {
  title = 'Health Challenge Tracker';
}
