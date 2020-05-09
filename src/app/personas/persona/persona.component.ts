import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService: PersonasService, private router:Router) { }

  ngOnInit() {
  }

  emitirSaludo(){
    this.personasService.saludar.emit(this.indice);
  }

}
