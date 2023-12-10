import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate(300, style({ opacity: 0.9 }))]),
      transition(':leave', [animate(300, style({ opacity: 0 }))])
    ])
  ]
})
export class ToastComponent {
  @Input() message: string = '';
  @Input() show: boolean = false;
  ngOnInit(): void {
    // Ocultar el toast después de 4 segundos (ajusta según tus necesidades)
    setTimeout(() => {
      this.show = false;
    }, 4000);
  }
  closeToast() {
    this.show = false;
  }

}
