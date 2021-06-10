import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'novo-agendamento',
  templateUrl: './novo-agendamento.component.html',
  styleUrls: ['./novo-agendamento.component.css']
})

export class NovoAgendamentoComponent implements OnInit {
  mockDatesAvaliable = [
    '10/06/2021',
    '14/06/2021',
    '15/06/2021',
    '16/06/2021',
    '23/06/2021'
  ]
  mockHourAvaliable = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '15:00',
    '16:00',
    '17:00',
  ]
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  myFilter = (d: Date | null): boolean => {
    const day = moment(d || new Date())

    return this.mockDatesAvaliable.includes(day.format('DD/MM/YYYY'))
  }

  solicitarAgendamento() {
    debugger
  } 
}