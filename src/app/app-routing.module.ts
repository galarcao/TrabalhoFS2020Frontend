import { SignupComponent } from './component/template/signup/signup.component';
import { LoginComponent } from './component/template/login/login.component';
import { AutenticacaoGuard } from './util/autenticacao.guard';
import { MainComponent } from './component/template/main/main.component';
import { PublicComponent } from './component/template/public/public.component';
import { NovoAgendamentoComponent } from './component/agendamento/novo-agendamento/novo-agendamento.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/template/home/home.component';
import { AgendamentoComponent } from './component/agendamento/home/agendamento.component';
import { AnalisarAgendamentoComponent } from './component/agendamento/analisar-agendamento/analisar-agendamento.component';


const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
    ],
    canActivate: [AutenticacaoGuard]
  },
  {
    path: '', component: PublicComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      //#region Mover para AutenticacaoGuard quando estiver pronta a autenticação.
      { path: 'agendamento', component: AgendamentoComponent },
      { path: 'novoAgendamento', component: NovoAgendamentoComponent },
      { path: 'analisarAgendamento', component: AnalisarAgendamentoComponent },
      //#endregion
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
