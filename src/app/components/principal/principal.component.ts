import { Component } from '@angular/core';
import { Deseo } from 'src/app/models/deseo';
import { BadWordsService } from 'src/app/services/bad-words.service';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  deseo_in: string = '';

  constructor(
    public badwordsService: BadWordsService,
    public desiresService: DeseosService,
    private router: Router,
  ) { }
  ngOnInit(): void {
  }
  registrarDeseo() {
    if (this.deseo_in.length > 0) {
      let deseo = new Deseo(this.deseo_in)
      this.desiresService.postDesire(deseo).subscribe((res) => {
        if (res == true) {
          this.deseo_in = '';
          alert('¡Deseo registrado!');
          this.router.navigate(['/clou-deseos']);
        }else {
          alert('Ingrese un deseo sin malas Palabras >:/');
        }
      })
    } else {
      alert('Debes ingresar tu deseo antes de poder enviarlo')
    }
  }
}
