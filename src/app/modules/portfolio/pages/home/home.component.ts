import { Component } from '@angular/core';
// components
import { HeaderComponent } from '../../components/header/header.component';
import { KnowlegeComponent } from '../../components/knowlege/knowledge.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowlegeComponent, ExperiencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
