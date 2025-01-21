import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(
    private router: Router,
    private counterService: CounterService
  ) {}

  viewDetails(productId: number) {
    this.router.navigate(['/product-details', productId]);
  }

  addToCart(product: any): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingProduct = cart.find((item: { id: number }) => item.id === product.id);

    if (!existingProduct) {

      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        stock: product.stock,
        image: product.images[0],
        quantity: 1,
      });
    } else {

      existingProduct.quantity++;
    }


    localStorage.setItem('cart', JSON.stringify(cart));


    this.counterService.setCounter(cart.length);
  }

}
