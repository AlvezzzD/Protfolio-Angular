import { Component, signal } from '@angular/core';

// Interface
import { IknowLedge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowlege',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowlege.component.scss'
})
export class KnowlegeComponent {
  public arrayKnowlege = signal<IknowLedge[]>([
      {
        src: 'assets/icons/knowledge/html.svg',
        alt: 'Icone de conhecimento de HTML5'
      },
      {
        src: 'assets/icons/knowledge/css.svg',
        alt: 'Icone de conhecimento de CSS'
      },
      {
        src: 'assets/icons/knowledge/javascript.svg',
        alt: 'Icone de conhecimento de JavaScript'
      },
      {
        src: 'assets/icons/knowledge/angular.svg',
        alt: 'Icone de conhecimento de Angular'
      },
    ]
  )
}
