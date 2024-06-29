import { Component, EventEmitter, Output } from '@angular/core';
import { ClasseInterf } from '../../models/classe-interf';
import { ClasseService } from '../../services/classe.service';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrl: './add-classe.component.css',
})
export class AddClasseComponent {
  @Output() addClasse: EventEmitter<ClasseInterf> = new EventEmitter();
  classe: ClasseInterf = {
    id: 0,
    name: '',
    teacher: '',
    numberOfStudents: 0,
  };
  submitted: boolean = false;
  constructor() {}
  toggleForm() {
    this.submitted = !this.submitted;
  }

  saveData() {
    this.addClasse.emit(this.classe);
    this.resetForm();
  }
  resetForm() {
    this.classe = {
      id: 0,
      name: '',
      teacher: '',
      numberOfStudents: 0,
    };
    this.submitted = false;
  }
}
