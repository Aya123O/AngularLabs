import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from '../products/product.model';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isMenuCollapsed = true;
  cartItemCount: any;
  local = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.getCounter().subscribe((count) => {
      this.local = count; 
    });
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
