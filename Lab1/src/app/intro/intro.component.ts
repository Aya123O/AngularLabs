import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  name = 'Aya Osama';
  bio = 'I am a passionate software engineer specializing in web development. I enjoy creating dynamic and user-friendly applications using technologies like Angular, JavaScript, and HTML/CSS. In my free time, I love to explore new tech trends, work on personal projects, and collaborate with others on open-source contributions.';
}
