import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'A simple web app using Angular.',
      imageUrl: '../../assets/th.jpg',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'A to-do list application with React.',
      imageUrl: '../../assets/th.jpg',
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'A portfolio website built with HTML, CSS, and JavaScript.',
      imageUrl: '../../assets/th.jpg',
      link: '#'
    }
  ];
}
