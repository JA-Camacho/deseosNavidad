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
  private colors = ['#ff0000', '#228b22', '#800080', '#ffd700', '#8b4513', '#006400'];

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

  randomColor(): string {
    const randomBytes = new Uint8Array(1);
    crypto.getRandomValues(randomBytes);

    const randomIndex = randomBytes[0] % this.colors.length;
    return this.colors[randomIndex];
  }
}
