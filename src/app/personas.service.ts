import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService{
    
    personas: Persona[] = [
        new Persona("Juan","Perez"), 
        new Persona("Laura","Juarez")
    ];

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService){}
    eliminarPersona(index: number) 
    {
        //splice se debe indicarle a partir de cual elemento se va a eliminar, y se le dice cuantos
        this.personas.splice(index,1);
    }
    encontrarPersona(index:number)
    {
        let persona:Persona=this.personas[index];
        this.personas.splice(index,1);
        return persona;
    }
    modificarPersona(index:number, persona:Persona)
    {
        let persona1=this.personas[index];
        persona1.nombre=persona.nombre;
        persona1.apellido=persona.apellido;
    }
    agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola("agregamos persona:" + persona.nombre);
        this.personas.push(persona);
    }
}