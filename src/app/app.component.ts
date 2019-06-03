import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mensajeA : string;

  recepcionarEmisor(e : any){
    this.mensajeA = e;


  }
}
