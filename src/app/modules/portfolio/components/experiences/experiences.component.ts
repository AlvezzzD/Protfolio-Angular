import { Component, signal } from '@angular/core';
// interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Tecnico de apoio ao usuario de informatica (HELPDESK)',
        p: 'Business For Sign Soluções em Negocios Inteligentes | Suporte. 09/05/2022 – Atuando'
      },
      text: '<p>Desde Maio de 2022, atuo na empresa B4 Realizando suporte técnico e desenvolvimento Front-End jr (JSON, HTML5, CSS3, JavaScript e Angular) na criação de diplomas digitais, auxiliando nos problemas de sistemas e hardwares nas maquinas internas da empresa e externas dos clientes.</p> <p>Gerenciando manuais internos e externos de todos os produtos fornecidos da empresa e administrando o site principal para possíveis correções e melhorias.</p> <p>Alem disso Fornecendo consultoria e treinamentos aos clientes para a criação de diplomas digitais e assinaturas digitais de acordo com as normativas do Ministério da Educação</p> <p>Responsavel pela Detecção de riscos e falhas nas máquinas e nas plataformas online, identificação do ambiente e levantamento de dados, instalação de produtos e gerenciamento de servidores internos da empresa'
    },
    {
      summary: {
        strong: 'Tecnico de informatica',
        p: 'Piba Informática Ltda | Técnico de Informática. 10/08/2020 – 31/01/2022'
      },
      text: '<p>Durante meu Periodo na Piba Informática Ltda de 10/08/2020, atuei como Tecnico de informatica e suporte ao cliente, gerenciando e prestando atendimento e assistência personalizada ao cliente realizando cadastro de clientes, preenchimento de nota fiscal eletrônica e criação de solicitação de pagamento.</p> <p>Alem disso Prestava suporte aos clientes, envolvendo a montagem de máquinas, reparos e configurações de equipamentos (Impressoras e computadores) na utilização de hardwares e softwares disponiveis</p>'
    },
    {
      summary: {
        strong: 'Suporte (HELPDESK)',
        p: 'Systemakers Partners Consultorias e Sistemas Ltda. Estagiário em TI. 03/02/2020 – 24/03/2020'
      },
      text: '<p>Em Fevereiro de 2020 iniciei meu estagio em TI, como suporte HelpDesk na empresa Systemakers Partners, gerenciando perfis de acesso dos clientes a plataforma da empresa e criando cadastro de novos usuarios.</p> <p>Auxiliando os clientes em possiveis erros e falhas na plataforma e realizando levantamento de dados para possiveis correções </p>'
    },
  ])

}
