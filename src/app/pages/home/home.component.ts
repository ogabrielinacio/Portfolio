import { Component } from '@angular/core';
import { GithubProjectsComponent } from '../../components/github-projects/github-projects.component';
import { AboutComponent } from '../../components/about/about.component';
import { CertificatesComponent } from '../../components/certificates/certificates.component';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GithubProjectsComponent, AboutComponent, CertificatesComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
