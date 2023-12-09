import { Component } from '@angular/core';

@Component({
  selector: 'app-clou-deseos',
  templateUrl: './clou-deseos.component.html',
  styleUrls: ['./clou-deseos.component.css']
})
export class ClouDeseosComponent {
  deseos: string[] = [];
  nuevoDeseo: string = '';

  enviarDeseo() {
    if (this.nuevoDeseo.trim() !== '') {
      this.deseos.push(this.nuevoDeseo);
      this.nuevoDeseo = '';
    }
  }

  getRandomColor() {
    const colors = ['#ff0000', '#228b22', '#800080', '#ffd700', '#8b4513', '#006400'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.enviarDeseo();
    }
  }

}
