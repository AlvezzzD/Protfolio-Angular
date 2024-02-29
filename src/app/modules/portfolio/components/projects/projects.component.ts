import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal([
    {
      src: '',
      alt: '',
      title: '',
      with: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://'
        }
      ]
    },
  ]);
}
