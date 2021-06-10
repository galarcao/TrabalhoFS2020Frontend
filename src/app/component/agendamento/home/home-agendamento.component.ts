import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-agendamento',
  templateUrl: './home-agendamento.component.html',
  styleUrls: ['./home-agendamento.component.css']
})

export class HomeAgendamentoComponent implements OnInit {
  agendamentosConfirmados = [
    {
      imovel: '',
      date: '',
      keyHourStart: '',
      keyHourEnd: '',
      Status: ''
    }
  ];
  agendamentosPendentes = [
    {
      imovel: '',
      date: '',
      keyHourStart: '',
      keyHourEnd: '',
      Status: ''
    }
  ];
  displayedColumns: string[] = ['imovel', 'date', 'keyHourStart', 'keyHourEnd', 'Status'];
  constructor() { }

  ngOnInit(): void {

  }
}