import { Component, OnInit } from '@angular/core';
import { ClasseInterf } from '../../models/classe-interf';
import { ActivatedRoute } from '@angular/router';
import { ClasseService } from '../../services/classe.service';

@Component({
  selector: 'app-edit-classe',
  templateUrl: './edit-classe.component.html',
  styleUrl: './edit-classe.component.css',
})
export class EditClasseComponent implements OnInit {
  classeId: any;
  classe: ClasseInterf = {
    id: 0,
    name: '',
    teacher: '',
    numberOfStudents: 0,
  };
  activateRoute: any;
  constructor(
    private route: ActivatedRoute,
    private classeService: ClasseService
  ) {}
  ngOnInit(): void {
    this.classeId = this.route.snapshot.paramMap.get('id');
    this.classeService.getClasseById(this.classeId).subscribe((res) => {
      console.log(res);
      this.classe = res;
    });
  }
  updateClasse() {
    const saveData: ClasseInterf = {
      id: this.classe.id,
      name: this.classe.name,
      teacher: this.classe.teacher,
      numberOfStudents: this.classe.numberOfStudents,
    };
    this.classeService.updateClasse(this.classeId, saveData).subscribe({
      next: (res: any) => {
        console.log(res);
      },
    });
  }
}
