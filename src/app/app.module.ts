import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// MOdules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
// components
import { ClassesComponent } from './components/classes/classes.component';
import { StudentsComponent } from './components/students/students.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { AddClasseComponent } from './components/add-classe/add-classe.component';
import { EditClasseComponent } from './components/edit-classe/edit-classe.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    StudentsComponent,
    NavComponent,
    MainComponent,
    AddClasseComponent,
    EditClasseComponent,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,

    HttpClientModule,
  ],
})
export class AppModule {}
