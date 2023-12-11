import { Component } from '@angular/core';
import { Deseo } from 'src/app/models/deseo';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-clou-deseos',
  templateUrl: './clou-deseos.component.html',
  styleUrls: ['./clou-deseos.component.css']
})
export class ClouDeseosComponent {
  deseos: Deseo[] = [];
  nuevoDeseo: string = '';
  loading: boolean = true; // Variable para controlar la visibilidad de la pantalla de carga

  constructor(public deseosService: DeseosService) {}

  ngOnInit(): void {
    this.getDeseos();
  }

  getDeseos() {
    this.deseosService.getDesires().subscribe(
      (res) => {
        this.deseos = res as Deseo[];
        this.loading = false; // Marcar como completado cuando se recibe la respuesta
      },
      (error) => {
        console.error('Error al obtener deseos', error);
        this.loading = false; // Marcar como completado incluso si hay un error (puedes manejar esto según tus necesidades)
      }
    );
  }

  getBackgroundColor(index: number): string {
    // Si el índice es par, devuelve rojo; de lo contrario, devuelve verde
    return index % 2 === 0 ? 'rgb(138, 12, 12)' : 'rgb(9, 122, 47)';
  }
}
