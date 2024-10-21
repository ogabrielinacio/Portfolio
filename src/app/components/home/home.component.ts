import { Component } from "@angular/core";
import { GithubProjectsComponent } from "../github-projects/github-projects.component";
import { AboutComponent } from "../about/about.component";
import { CertificatesComponent } from "../certificates/certificates.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [GithubProjectsComponent, AboutComponent, CertificatesComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
