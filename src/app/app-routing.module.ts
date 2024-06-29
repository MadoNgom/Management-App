import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './components/classes/classes.component';
import { StudentsComponent } from './components/students/students.component';
import { EditClasseComponent } from './components/edit-classe/edit-classe.component';

const routes: Routes = [
  { path: '', redirectTo: '/classe', pathMatch: 'full' },
  {
    path: 'classe',
    component: ClassesComponent,
  },
  { path: 'edit/:id', component: EditClasseComponent },
  {
    path: 'student',
    component: StudentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
