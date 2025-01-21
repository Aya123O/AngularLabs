import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    title: 'Products'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart'
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    title: 'Product Details'
  },
  {
    path: 'footer',
    component: FooterComponent,
    title: 'footer'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found'
  }
];
