import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from "./principal/principal.component";
import { CarrosComponent } from "./carros/carros.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PrincipalComponent, CarrosComponent]
})
export class AppComponent {
  title = 'front-angular';
}
