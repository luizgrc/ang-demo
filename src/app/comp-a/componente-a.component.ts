import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compA',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class CompA {
  
  nombre: string;
  apodo : string;
  lista : string[] = [];
  
  @Input()
  mensaje : string;

  @Output()
  emisor = new EventEmitter();

  enviar(){
    this.emisor.emit('Mensaje Enviado desde Componente A');
  }

  recepcionarValor(e : any){

    this.nombre = e.target.value;
  }

  agregar(){
    this.lista.push(this.apodo);
  }
}
