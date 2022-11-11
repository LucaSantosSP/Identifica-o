import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimerComponent } from './components/timer/timer.component';
import { DisciplinasComponent } from './components/disciplinas/disciplinas.component';
import { DisciplinasService } from './services/disciplinas.service';
import { TimerService } from './services/timer.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TimerComponent },
      { path: 'disciplinas', component: DisciplinasComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TimerComponent,
    DisciplinasComponent,
  ],
  bootstrap: [AppComponent],
  providers: [DisciplinasService, TimerService],
})
export class AppModule {}
