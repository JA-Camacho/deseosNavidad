import { Component } from '@angular/core';
import { Sugerencia } from 'src/app/models/sugerencia';
import { SugerenciaService } from 'src/app/services/sugerencia.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  sugerencia_in = '';
  showToast: boolean = false;
  toastMessage: string = '';
  constructor(
    public sugerenciaService: SugerenciaService,
  ) { }
  showCustomToast(message: string) {
    this.toastMessage = message;
    this.showToast = true;
  }

  registrarSugerencia() {
    if (this.sugerencia_in.trim().length > 0) {
      const sugerencia = new Sugerencia(this.sugerencia_in);
      console.log(this.sugerencia_in)
      this.sugerenciaService.postSugerencia(sugerencia).subscribe(
        (res) => {
          // Mostrar un toast de éxito
          this.showCustomToast('Se ha registrado la sugerencia correctamente. !Gracias!');
          // Borrar el contenido del campo de sugerencia
          this.sugerencia_in = '';
        },
        (error) => {
          // Mostrar un toast de error
          this.showCustomToast('Error al registrar sugerencia');
        }
      );
    } else {
      // Mostrar un toast de advertencia
      this.showCustomToast('La sugerencia no puede estar vacía');
    }
  }
}
