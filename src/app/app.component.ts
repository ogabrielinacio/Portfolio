import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from './pages/home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterLink],
})
export class AppComponent {
  title = 'Portfolio';
}
