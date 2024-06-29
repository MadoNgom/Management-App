import { Component, OnInit } from '@angular/core';
import { ClasseInterf } from '../../models/classe-interf';
import { ClasseService } from '../../services/classe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',
})
export class ClassesComponent implements OnInit {
  listeClasse: ClasseInterf[] = [];

  constructor(private classeService: ClasseService) {}
  ngOnInit(): void {
    this.getClasses();
  }
  // GET ALL CLASSE FROM MY SERVICE
  getClasses() {
    this.classeService.getClasses().subscribe((classe) => {
      this.listeClasse = classe;
      console.log(classe);
    });
  }
  // TO ADD CLASSE TO THE SYSTEME

  addClasse(classe: ClasseInterf) {
    this.classeService.addClasse(classe).subscribe((newClasse) => {
      this.listeClasse.push(newClasse);
    });
  }
  // TO DELETE CLASSE FROM THE SYSTEME
  deleteClasse(classe: ClasseInterf) {
    this.classeService.deleteClasse(classe.id).subscribe(() => {
      console.log(`Class with id: ${classe.id} deleted successfully`);
      this.listeClasse = this.listeClasse.filter((c) => c.id !== classe.id);
      console.log('Updated class list:', this.listeClasse);
    });
  }
}
