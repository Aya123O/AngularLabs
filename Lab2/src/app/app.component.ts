import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http'; 
import { UserCardComponent } from './user-card/user-card.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserCardComponent, HttpClientModule, CommonModule, FormsModule],  
})
export class AppComponent implements OnInit {
  users: any[] = [];
  searchQuery: string = ''; 
  selectedRole: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('../assets/users.json').subscribe((data) => {
      this.users = data;
    });
  }

  filteredUsers() {
    return this.users.filter(user => {
      const matchesSearch = user.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            user.email.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesRole = this.selectedRole ? user.role === this.selectedRole : true;
      return matchesSearch && matchesRole;
    });
  }
}
