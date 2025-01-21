import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  productId: number | null = null;
  counterService: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get(`https://dummyjson.com/products/${this.productId}`).subscribe(
      (data: any) => {
        this.product = data;
      },
      (error) => {
        console.error('Error fetching product data:', error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

 addToCart(product: Product): void {
     const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
     const existingProduct = cart.find((item) => item.id === product.id);
 
     if (!existingProduct) {
       cart.push({
         ...product,
         quantity: 1,
       });
     } else {
       existingProduct.quantity++;
     }
 
     localStorage.setItem('cart', JSON.stringify(cart));
     this.counterService.setCounter(cart.length);
   }
}
