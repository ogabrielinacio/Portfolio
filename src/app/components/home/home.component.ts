import { Component } from '@angular/core';
import { GithubProjectsComponent } from "../github-projects/github-projects.component";
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GithubProjectsComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
