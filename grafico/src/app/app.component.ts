import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const dados = [
      { categoria: 'Eletronico', valor: 10},
      { categoria: 'Roupas', valor: 15},
      { categoria: 'Decoração', valor: 5},
      { categoria: 'Ferramentas', valor: 30},

    ];

    const labels = dados.map(item => item.categoria);
    const valores = dados.map(item => item.valor);

    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Vendas por Categoria',
          data: valores,
          backgroundColor: 'rgba(31, 82, 146, 0.6)'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
}
