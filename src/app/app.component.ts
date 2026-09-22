import { Component } from '@angular/core';
import { education, interests, jobs, person, projects, skills } from './resume';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly person = person;
  readonly jobs = jobs;
  readonly projects = projects;
  readonly skills = skills;
  readonly education = education;
  readonly interests = interests;
  readonly year = new Date().getFullYear();
}
