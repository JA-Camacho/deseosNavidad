import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  palabrasInapropiadas = ['chucha', 'verga', 'puta']; 
  clasificaciones: { [palabra: string]: string } = {};

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.clasificarPalabras();
  }

  clasificarPalabras(): void {
    this.palabrasInapropiadas.forEach((palabra) => {
      this.chatService.clasificarPalabra(palabra).subscribe(
        (response) => {
          const clasificacion = response.choices[0].text.trim();
          this.clasificaciones[palabra] = clasificacion;
        },
        (error) => {
          console.error('Error al clasificar la palabra:', error);
        }
      );
    });
  }
}