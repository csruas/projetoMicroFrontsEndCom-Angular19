import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Produto {
  nome: string;
  valor: number;
  imagem: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'produtos';

  produtos: Produto[] = [
    {
      nome: 'Guitarra Tagima TG-530',
      valor: 999.99,
      imagem: 'https://picsum.photos/200/300/?blur'
    },
    {
      nome: 'Dog Alemão',
      valor: 500,
      imagem: 'https://picsum.photos/id/237/200/300'
    },
    {
      nome: 'Camera Canon EOS 5D Mark IV',
      valor: 300.01,
      imagem: 'https://picsum.photos/200'
    },
    {
      nome: 'Cantera JBL Flip 5',
      valor: 300.01,
      imagem: 'https://picsum.photos/seed/picsum/200/300'
    },
  ];
}
