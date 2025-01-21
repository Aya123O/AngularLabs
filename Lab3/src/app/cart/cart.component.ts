import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { CounterService } from '../counter.service';
import { Product } from '../products/product.model';  // Import your Product interface

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = [];  
  counter: number = 0;

  constructor(
    private location: Location,
    private counterService: CounterService
  ) {
    this.counterService.getCounter().subscribe((value) => {
      this.counter = value;
    });
  }

  ngOnInit(): void {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartProducts = cart;
    console.log(this.cartProducts);  
    this.counterService.setCounter(this.cartProducts.length);
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

  removeFromCart(productId: number): void {
    this.cartProducts = this.cartProducts.filter((product) => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.counterService.setCounter(this.cartProducts.length);
  }

  increment(productId: number): void {
    const product = this.cartProducts.find((item) => item.id === productId);

    if (product && product.quantity < product.stock) {
      product.quantity++;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      this.counterService.setCounter(this.cartProducts.length);
    }
  }

  decrement(productId: number): void {
    const product = this.cartProducts.find((item) => item.id === productId);

    if (product && product.quantity > 1) {
      product.quantity--;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      this.counterService.setCounter(this.cartProducts.length);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
