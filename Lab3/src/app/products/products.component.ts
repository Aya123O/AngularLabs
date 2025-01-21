import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {
     
   }

  ngOnInit(): void {

    this.http.get<any>('https://dummyjson.com/products')
      .subscribe({
        next: (response) => {
          console.log('Data received from API:', response);
          if (response && response.products) {
            this.products = response.products; 
          } else {
            console.error('No products array found in the response');
          }
        },
        error: (error) => {
          console.error('Error fetching data from API:', error);

          this.products = [];
        }
      });
  }
}
