import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [AppModule, ServerModule, TableModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
