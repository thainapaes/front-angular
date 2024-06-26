import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../model/User';
import { UserService } from '../service/user/user.service';
import { Observable } from 'rxjs';
import { Car } from '../model/Car';
import { parseJsonText } from 'typescript';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterOutlet, RouterLink],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  setActive(event: Event) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    const clickedLink = event.target as HTMLLinkElement;
    clickedLink.classList.add('active');
  }


}
